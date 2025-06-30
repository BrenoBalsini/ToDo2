import Text from "../componentes/text";
import Icon from "../componentes/icon";
import Button from "../componentes/button";
import ButtonIcon from "../componentes/button-icon";
import InputCheckbox from "../componentes/input-checkbox";

import ThreshIcon from "../assets/icons/Trash-Regular.svg?react";
import CheckIcon from "../assets/icons/Check-Regular.svg?react";
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react";
import SpinnerIcon from "../assets/icons/spiner.svg?react";
import XIcon from "../assets/icons/X-Regular.svg?react";
import Bagde from "../componentes/badge";
import InputText from "../componentes/input-text";
import Card from "../componentes/card";
import Container from "../componentes/container";
import Skeleton from "../componentes/skeleton";


export default function PageComponents() {
  return (
    <Container>
      <div className="grid gap-3">
        <div className="flex flex-col gap-1">
          <Text variant="body-md" className="text-pink-base">
            Hello World!
          </Text>
        </div>

        <div className="flex gap-1">
          <Icon svg={ThreshIcon} />
          <Icon svg={CheckIcon} />
          <Icon svg={PencilIcon} />
          <Icon svg={PlusIcon} />
          <Icon svg={SpinnerIcon} animate/>
          <Icon svg={XIcon} />
        </div>

        <div className="flex gap-1">
          <Bagde variant="secondary">5</Bagde>
          <Bagde variant="primary">2 de 5</Bagde>
          <Bagde loading>5</Bagde>
        </div>

        <div>
          <Button variant="primary" icon={PlusIcon}>Nova Tarefa</Button>
        </div>

        <div>
          <ButtonIcon icon={ThreshIcon}></ButtonIcon>
          <ButtonIcon icon={ThreshIcon} variant={"secondary"}></ButtonIcon>
          <ButtonIcon icon={ThreshIcon} variant={"tertiary"}></ButtonIcon>
          <ButtonIcon icon={ThreshIcon} loading></ButtonIcon>
        </div>

        <div>
          <InputText/>
        </div>

        <div>
          <InputCheckbox/>

          <InputCheckbox loading/>
        </div>

        <div>
          <Card size="md">Hello World</Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6"/>
          <Skeleton className="h-6"/>
          <Skeleton className="w-96 h-6"/>
        </div>
      </div>
    </Container>
  )
}
