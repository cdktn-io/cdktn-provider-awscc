# `iotwirelessTaskDefinition` Submodule <a name="`iotwirelessTaskDefinition` Submodule" id="@cdktn/provider-awscc.iotwirelessTaskDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessTaskDefinition <a name="IotwirelessTaskDefinition" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition awscc_iotwireless_task_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

new iotwirelessTaskDefinition.IotwirelessTaskDefinition(scope: Construct, id: string, config: IotwirelessTaskDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig">IotwirelessTaskDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig">IotwirelessTaskDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putLoRaWanUpdateGatewayTaskEntry">putLoRaWanUpdateGatewayTaskEntry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putUpdate">putUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetLoRaWanUpdateGatewayTaskEntry">resetLoRaWanUpdateGatewayTaskEntry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetTaskDefinitionType">resetTaskDefinitionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoRaWanUpdateGatewayTaskEntry` <a name="putLoRaWanUpdateGatewayTaskEntry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putLoRaWanUpdateGatewayTaskEntry"></a>

```typescript
public putLoRaWanUpdateGatewayTaskEntry(value: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putLoRaWanUpdateGatewayTaskEntry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putTags"></a>

```typescript
public putTags(value: IResolvable | IotwirelessTaskDefinitionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>[]

---

##### `putUpdate` <a name="putUpdate" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putUpdate"></a>

```typescript
public putUpdate(value: IotwirelessTaskDefinitionUpdate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a>

---

##### `resetLoRaWanUpdateGatewayTaskEntry` <a name="resetLoRaWanUpdateGatewayTaskEntry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetLoRaWanUpdateGatewayTaskEntry"></a>

```typescript
public resetLoRaWanUpdateGatewayTaskEntry(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTaskDefinitionType` <a name="resetTaskDefinitionType" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetTaskDefinitionType"></a>

```typescript
public resetTaskDefinitionType(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetUpdate"></a>

```typescript
public resetUpdate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessTaskDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isConstruct"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

iotwirelessTaskDefinition.IotwirelessTaskDefinition.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformElement"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformResource"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotwirelessTaskDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotwirelessTaskDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotwirelessTaskDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessTaskDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.loRaWanUpdateGatewayTaskEntry">loRaWanUpdateGatewayTaskEntry</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList">IotwirelessTaskDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionId">taskDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.update">update</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference">IotwirelessTaskDefinitionUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.autoCreateTasksInput">autoCreateTasksInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.loRaWanUpdateGatewayTaskEntryInput">loRaWanUpdateGatewayTaskEntryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionTypeInput">taskDefinitionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.updateInput">updateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.autoCreateTasks">autoCreateTasks</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionType">taskDefinitionType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loRaWanUpdateGatewayTaskEntry`<sup>Required</sup> <a name="loRaWanUpdateGatewayTaskEntry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.loRaWanUpdateGatewayTaskEntry"></a>

```typescript
public readonly loRaWanUpdateGatewayTaskEntry: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tags"></a>

```typescript
public readonly tags: IotwirelessTaskDefinitionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList">IotwirelessTaskDefinitionTagsList</a>

---

##### `taskDefinitionId`<sup>Required</sup> <a name="taskDefinitionId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionId"></a>

```typescript
public readonly taskDefinitionId: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.update"></a>

```typescript
public readonly update: IotwirelessTaskDefinitionUpdateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference">IotwirelessTaskDefinitionUpdateOutputReference</a>

---

##### `autoCreateTasksInput`<sup>Optional</sup> <a name="autoCreateTasksInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.autoCreateTasksInput"></a>

```typescript
public readonly autoCreateTasksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `loRaWanUpdateGatewayTaskEntryInput`<sup>Optional</sup> <a name="loRaWanUpdateGatewayTaskEntryInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.loRaWanUpdateGatewayTaskEntryInput"></a>

```typescript
public readonly loRaWanUpdateGatewayTaskEntryInput: IResolvable | IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotwirelessTaskDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>[]

---

##### `taskDefinitionTypeInput`<sup>Optional</sup> <a name="taskDefinitionTypeInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionTypeInput"></a>

```typescript
public readonly taskDefinitionTypeInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.updateInput"></a>

```typescript
public readonly updateInput: IResolvable | IotwirelessTaskDefinitionUpdate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a>

---

##### `autoCreateTasks`<sup>Required</sup> <a name="autoCreateTasks" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.autoCreateTasks"></a>

```typescript
public readonly autoCreateTasks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `taskDefinitionType`<sup>Required</sup> <a name="taskDefinitionType" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionType"></a>

```typescript
public readonly taskDefinitionType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessTaskDefinitionConfig <a name="IotwirelessTaskDefinitionConfig" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.Initializer"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

const iotwirelessTaskDefinitionConfig: iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.autoCreateTasks">autoCreateTasks</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to automatically create tasks using this task definition for all gateways with the specified current version. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.loRaWanUpdateGatewayTaskEntry">loRaWanUpdateGatewayTaskEntry</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a></code> | The list of task definitions. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.name">name</a></code> | <code>string</code> | The name of the new resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>[]</code> | A list of key-value pairs that contain metadata for the destination. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.taskDefinitionType">taskDefinitionType</a></code> | <code>string</code> | A filter to list only the wireless gateway task definitions that use this task definition type. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.update">update</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a></code> | Information about the gateways to update. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoCreateTasks`<sup>Required</sup> <a name="autoCreateTasks" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.autoCreateTasks"></a>

```typescript
public readonly autoCreateTasks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to automatically create tasks using this task definition for all gateways with the specified current version.

If false, the task must me created by calling CreateWirelessGatewayTask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#auto_create_tasks IotwirelessTaskDefinition#auto_create_tasks}

---

##### `loRaWanUpdateGatewayTaskEntry`<sup>Optional</sup> <a name="loRaWanUpdateGatewayTaskEntry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.loRaWanUpdateGatewayTaskEntry"></a>

```typescript
public readonly loRaWanUpdateGatewayTaskEntry: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a>

The list of task definitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#lo_ra_wan_update_gateway_task_entry IotwirelessTaskDefinition#lo_ra_wan_update_gateway_task_entry}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#name IotwirelessTaskDefinition#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotwirelessTaskDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>[]

A list of key-value pairs that contain metadata for the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#tags IotwirelessTaskDefinition#tags}

---

##### `taskDefinitionType`<sup>Optional</sup> <a name="taskDefinitionType" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.taskDefinitionType"></a>

```typescript
public readonly taskDefinitionType: string;
```

- *Type:* string

A filter to list only the wireless gateway task definitions that use this task definition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#task_definition_type IotwirelessTaskDefinition#task_definition_type}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.update"></a>

```typescript
public readonly update: IotwirelessTaskDefinitionUpdate;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a>

Information about the gateways to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#update IotwirelessTaskDefinition#update}

---

### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.Initializer"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

const iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry: iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.property.currentVersion">currentVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.property.updateVersion">updateVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}. |

---

##### `currentVersion`<sup>Optional</sup> <a name="currentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.property.currentVersion"></a>

```typescript
public readonly currentVersion: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}.

---

##### `updateVersion`<sup>Optional</sup> <a name="updateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.property.updateVersion"></a>

```typescript
public readonly updateVersion: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}.

---

### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.Initializer"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

const iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion: iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.model">model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.packageVersion">packageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.station">station</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

##### `packageVersion`<sup>Optional</sup> <a name="packageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.packageVersion"></a>

```typescript
public readonly packageVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

##### `station`<sup>Optional</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.station"></a>

```typescript
public readonly station: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.Initializer"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

const iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion: iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.model">model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.packageVersion">packageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.station">station</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

##### `packageVersion`<sup>Optional</sup> <a name="packageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.packageVersion"></a>

```typescript
public readonly packageVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

##### `station`<sup>Optional</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.station"></a>

```typescript
public readonly station: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

### IotwirelessTaskDefinitionTags <a name="IotwirelessTaskDefinitionTags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.Initializer"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

const iotwirelessTaskDefinitionTags: iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#key IotwirelessTaskDefinition#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#value IotwirelessTaskDefinition#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#key IotwirelessTaskDefinition#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#value IotwirelessTaskDefinition#value}.

---

### IotwirelessTaskDefinitionUpdate <a name="IotwirelessTaskDefinitionUpdate" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.Initializer"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

const iotwirelessTaskDefinitionUpdate: iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#lo_ra_wan IotwirelessTaskDefinition#lo_ra_wan}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.updateDataRole">updateDataRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#update_data_role IotwirelessTaskDefinition#update_data_role}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.updateDataSource">updateDataSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#update_data_source IotwirelessTaskDefinition#update_data_source}. |

---

##### `loRaWan`<sup>Optional</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.loRaWan"></a>

```typescript
public readonly loRaWan: IotwirelessTaskDefinitionUpdateLoRaWan;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#lo_ra_wan IotwirelessTaskDefinition#lo_ra_wan}.

---

##### `updateDataRole`<sup>Optional</sup> <a name="updateDataRole" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.updateDataRole"></a>

```typescript
public readonly updateDataRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#update_data_role IotwirelessTaskDefinition#update_data_role}.

---

##### `updateDataSource`<sup>Optional</sup> <a name="updateDataSource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.updateDataSource"></a>

```typescript
public readonly updateDataSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#update_data_source IotwirelessTaskDefinition#update_data_source}.

---

### IotwirelessTaskDefinitionUpdateLoRaWan <a name="IotwirelessTaskDefinitionUpdateLoRaWan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.Initializer"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

const iotwirelessTaskDefinitionUpdateLoRaWan: iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.currentVersion">currentVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.sigKeyCrc">sigKeyCrc</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#sig_key_crc IotwirelessTaskDefinition#sig_key_crc}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.updateSignature">updateSignature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#update_signature IotwirelessTaskDefinition#update_signature}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.updateVersion">updateVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}. |

---

##### `currentVersion`<sup>Optional</sup> <a name="currentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.currentVersion"></a>

```typescript
public readonly currentVersion: IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}.

---

##### `sigKeyCrc`<sup>Optional</sup> <a name="sigKeyCrc" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.sigKeyCrc"></a>

```typescript
public readonly sigKeyCrc: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#sig_key_crc IotwirelessTaskDefinition#sig_key_crc}.

---

##### `updateSignature`<sup>Optional</sup> <a name="updateSignature" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.updateSignature"></a>

```typescript
public readonly updateSignature: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#update_signature IotwirelessTaskDefinition#update_signature}.

---

##### `updateVersion`<sup>Optional</sup> <a name="updateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.updateVersion"></a>

```typescript
public readonly updateVersion: IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}.

---

### IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion <a name="IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.Initializer"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

const iotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion: iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.model">model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.packageVersion">packageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.station">station</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

##### `packageVersion`<sup>Optional</sup> <a name="packageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.packageVersion"></a>

```typescript
public readonly packageVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

##### `station`<sup>Optional</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.station"></a>

```typescript
public readonly station: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

### IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion <a name="IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.Initializer"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

const iotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion: iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.model">model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.packageVersion">packageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.station">station</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

##### `packageVersion`<sup>Optional</sup> <a name="packageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.packageVersion"></a>

```typescript
public readonly packageVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

##### `station`<sup>Optional</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.station"></a>

```typescript
public readonly station: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

new iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetPackageVersion">resetPackageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetStation">resetStation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetPackageVersion` <a name="resetPackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetPackageVersion"></a>

```typescript
public resetPackageVersion(): void
```

##### `resetStation` <a name="resetStation" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetStation"></a>

```typescript
public resetStation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.packageVersionInput">packageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.stationInput">stationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.packageVersion">packageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.station">station</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `packageVersionInput`<sup>Optional</sup> <a name="packageVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.packageVersionInput"></a>

```typescript
public readonly packageVersionInput: string;
```

- *Type:* string

---

##### `stationInput`<sup>Optional</sup> <a name="stationInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.stationInput"></a>

```typescript
public readonly stationInput: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.packageVersion"></a>

```typescript
public readonly packageVersion: string;
```

- *Type:* string

---

##### `station`<sup>Required</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.station"></a>

```typescript
public readonly station: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a>

---


### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

new iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putCurrentVersion">putCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putUpdateVersion">putUpdateVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resetCurrentVersion">resetCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resetUpdateVersion">resetUpdateVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCurrentVersion` <a name="putCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putCurrentVersion"></a>

```typescript
public putCurrentVersion(value: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putCurrentVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a>

---

##### `putUpdateVersion` <a name="putUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putUpdateVersion"></a>

```typescript
public putUpdateVersion(value: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putUpdateVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a>

---

##### `resetCurrentVersion` <a name="resetCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resetCurrentVersion"></a>

```typescript
public resetCurrentVersion(): void
```

##### `resetUpdateVersion` <a name="resetUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resetUpdateVersion"></a>

```typescript
public resetUpdateVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.currentVersion">currentVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.updateVersion">updateVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.currentVersionInput">currentVersionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.updateVersionInput">updateVersionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.currentVersion"></a>

```typescript
public readonly currentVersion: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference</a>

---

##### `updateVersion`<sup>Required</sup> <a name="updateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.updateVersion"></a>

```typescript
public readonly updateVersion: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference</a>

---

##### `currentVersionInput`<sup>Optional</sup> <a name="currentVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.currentVersionInput"></a>

```typescript
public readonly currentVersionInput: IResolvable | IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a>

---

##### `updateVersionInput`<sup>Optional</sup> <a name="updateVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.updateVersionInput"></a>

```typescript
public readonly updateVersionInput: IResolvable | IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a>

---


### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

new iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetPackageVersion">resetPackageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetStation">resetStation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetPackageVersion` <a name="resetPackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetPackageVersion"></a>

```typescript
public resetPackageVersion(): void
```

##### `resetStation` <a name="resetStation" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetStation"></a>

```typescript
public resetStation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.packageVersionInput">packageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.stationInput">stationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.packageVersion">packageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.station">station</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `packageVersionInput`<sup>Optional</sup> <a name="packageVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.packageVersionInput"></a>

```typescript
public readonly packageVersionInput: string;
```

- *Type:* string

---

##### `stationInput`<sup>Optional</sup> <a name="stationInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.stationInput"></a>

```typescript
public readonly stationInput: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.packageVersion"></a>

```typescript
public readonly packageVersion: string;
```

- *Type:* string

---

##### `station`<sup>Required</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.station"></a>

```typescript
public readonly station: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a>

---


### IotwirelessTaskDefinitionTagsList <a name="IotwirelessTaskDefinitionTagsList" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

new iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.get"></a>

```typescript
public get(index: number): IotwirelessTaskDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessTaskDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>[]

---


### IotwirelessTaskDefinitionTagsOutputReference <a name="IotwirelessTaskDefinitionTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

new iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessTaskDefinitionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>

---


### IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference <a name="IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

new iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetPackageVersion">resetPackageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetStation">resetStation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetPackageVersion` <a name="resetPackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetPackageVersion"></a>

```typescript
public resetPackageVersion(): void
```

##### `resetStation` <a name="resetStation" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetStation"></a>

```typescript
public resetStation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.packageVersionInput">packageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.stationInput">stationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.packageVersion">packageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.station">station</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `packageVersionInput`<sup>Optional</sup> <a name="packageVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.packageVersionInput"></a>

```typescript
public readonly packageVersionInput: string;
```

- *Type:* string

---

##### `stationInput`<sup>Optional</sup> <a name="stationInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.stationInput"></a>

```typescript
public readonly stationInput: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.packageVersion"></a>

```typescript
public readonly packageVersion: string;
```

- *Type:* string

---

##### `station`<sup>Required</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.station"></a>

```typescript
public readonly station: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a>

---


### IotwirelessTaskDefinitionUpdateLoRaWanOutputReference <a name="IotwirelessTaskDefinitionUpdateLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

new iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putCurrentVersion">putCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putUpdateVersion">putUpdateVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetCurrentVersion">resetCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetSigKeyCrc">resetSigKeyCrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetUpdateSignature">resetUpdateSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetUpdateVersion">resetUpdateVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCurrentVersion` <a name="putCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putCurrentVersion"></a>

```typescript
public putCurrentVersion(value: IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putCurrentVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a>

---

##### `putUpdateVersion` <a name="putUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putUpdateVersion"></a>

```typescript
public putUpdateVersion(value: IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putUpdateVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a>

---

##### `resetCurrentVersion` <a name="resetCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetCurrentVersion"></a>

```typescript
public resetCurrentVersion(): void
```

##### `resetSigKeyCrc` <a name="resetSigKeyCrc" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetSigKeyCrc"></a>

```typescript
public resetSigKeyCrc(): void
```

##### `resetUpdateSignature` <a name="resetUpdateSignature" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetUpdateSignature"></a>

```typescript
public resetUpdateSignature(): void
```

##### `resetUpdateVersion` <a name="resetUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetUpdateVersion"></a>

```typescript
public resetUpdateVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.currentVersion">currentVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateVersion">updateVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.currentVersionInput">currentVersionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.sigKeyCrcInput">sigKeyCrcInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateSignatureInput">updateSignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateVersionInput">updateVersionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.sigKeyCrc">sigKeyCrc</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateSignature">updateSignature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.currentVersion"></a>

```typescript
public readonly currentVersion: IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference</a>

---

##### `updateVersion`<sup>Required</sup> <a name="updateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateVersion"></a>

```typescript
public readonly updateVersion: IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference</a>

---

##### `currentVersionInput`<sup>Optional</sup> <a name="currentVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.currentVersionInput"></a>

```typescript
public readonly currentVersionInput: IResolvable | IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a>

---

##### `sigKeyCrcInput`<sup>Optional</sup> <a name="sigKeyCrcInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.sigKeyCrcInput"></a>

```typescript
public readonly sigKeyCrcInput: number;
```

- *Type:* number

---

##### `updateSignatureInput`<sup>Optional</sup> <a name="updateSignatureInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateSignatureInput"></a>

```typescript
public readonly updateSignatureInput: string;
```

- *Type:* string

---

##### `updateVersionInput`<sup>Optional</sup> <a name="updateVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateVersionInput"></a>

```typescript
public readonly updateVersionInput: IResolvable | IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a>

---

##### `sigKeyCrc`<sup>Required</sup> <a name="sigKeyCrc" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.sigKeyCrc"></a>

```typescript
public readonly sigKeyCrc: number;
```

- *Type:* number

---

##### `updateSignature`<sup>Required</sup> <a name="updateSignature" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateSignature"></a>

```typescript
public readonly updateSignature: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessTaskDefinitionUpdateLoRaWan;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a>

---


### IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference <a name="IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

new iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetPackageVersion">resetPackageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetStation">resetStation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetPackageVersion` <a name="resetPackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetPackageVersion"></a>

```typescript
public resetPackageVersion(): void
```

##### `resetStation` <a name="resetStation" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetStation"></a>

```typescript
public resetStation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.packageVersionInput">packageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.stationInput">stationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.packageVersion">packageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.station">station</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `packageVersionInput`<sup>Optional</sup> <a name="packageVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.packageVersionInput"></a>

```typescript
public readonly packageVersionInput: string;
```

- *Type:* string

---

##### `stationInput`<sup>Optional</sup> <a name="stationInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.stationInput"></a>

```typescript
public readonly stationInput: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.packageVersion"></a>

```typescript
public readonly packageVersion: string;
```

- *Type:* string

---

##### `station`<sup>Required</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.station"></a>

```typescript
public readonly station: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a>

---


### IotwirelessTaskDefinitionUpdateOutputReference <a name="IotwirelessTaskDefinitionUpdateOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer"></a>

```typescript
import { iotwirelessTaskDefinition } from '@cdktn/provider-awscc'

new iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.putLoRaWan">putLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetLoRaWan">resetLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetUpdateDataRole">resetUpdateDataRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetUpdateDataSource">resetUpdateDataSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoRaWan` <a name="putLoRaWan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.putLoRaWan"></a>

```typescript
public putLoRaWan(value: IotwirelessTaskDefinitionUpdateLoRaWan): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.putLoRaWan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a>

---

##### `resetLoRaWan` <a name="resetLoRaWan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetLoRaWan"></a>

```typescript
public resetLoRaWan(): void
```

##### `resetUpdateDataRole` <a name="resetUpdateDataRole" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetUpdateDataRole"></a>

```typescript
public resetUpdateDataRole(): void
```

##### `resetUpdateDataSource` <a name="resetUpdateDataSource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetUpdateDataSource"></a>

```typescript
public resetUpdateDataSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.loRaWanInput">loRaWanInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataRoleInput">updateDataRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataSourceInput">updateDataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataRole">updateDataRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataSource">updateDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.loRaWan"></a>

```typescript
public readonly loRaWan: IotwirelessTaskDefinitionUpdateLoRaWanOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanOutputReference</a>

---

##### `loRaWanInput`<sup>Optional</sup> <a name="loRaWanInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.loRaWanInput"></a>

```typescript
public readonly loRaWanInput: IResolvable | IotwirelessTaskDefinitionUpdateLoRaWan;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a>

---

##### `updateDataRoleInput`<sup>Optional</sup> <a name="updateDataRoleInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataRoleInput"></a>

```typescript
public readonly updateDataRoleInput: string;
```

- *Type:* string

---

##### `updateDataSourceInput`<sup>Optional</sup> <a name="updateDataSourceInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataSourceInput"></a>

```typescript
public readonly updateDataSourceInput: string;
```

- *Type:* string

---

##### `updateDataRole`<sup>Required</sup> <a name="updateDataRole" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataRole"></a>

```typescript
public readonly updateDataRole: string;
```

- *Type:* string

---

##### `updateDataSource`<sup>Required</sup> <a name="updateDataSource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataSource"></a>

```typescript
public readonly updateDataSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessTaskDefinitionUpdate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a>

---



