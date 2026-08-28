# `iotCommand` Submodule <a name="`iotCommand` Submodule" id="@cdktn/provider-awscc.iotCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotCommand <a name="IotCommand" id="@cdktn/provider-awscc.iotCommand.IotCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command awscc_iot_command}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

new iotCommand.IotCommand(scope: Construct, id: string, config: IotCommandConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig">IotCommandConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig">IotCommandConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putMandatoryParameters">putMandatoryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putPayload">putPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putPreprocessor">putPreprocessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetDeprecated">resetDeprecated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetLastUpdatedAt">resetLastUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetMandatoryParameters">resetMandatoryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPayloadTemplate">resetPayloadTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPendingDeletion">resetPendingDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPreprocessor">resetPreprocessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommand.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotCommand.IotCommand.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotCommand.IotCommand.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotCommand.IotCommand.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotCommand.IotCommand.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommand.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotCommand.IotCommand.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotCommand.IotCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotCommand.IotCommand.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotCommand.IotCommand.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotCommand.IotCommand.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotCommand.IotCommand.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotCommand.IotCommand.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotCommand.IotCommand.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotCommand.IotCommand.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCommand.IotCommand.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCommand.IotCommand.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMandatoryParameters` <a name="putMandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommand.putMandatoryParameters"></a>

```typescript
public putMandatoryParameters(value: IResolvable | IotCommandMandatoryParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommand.putMandatoryParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>[]

---

##### `putPayload` <a name="putPayload" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPayload"></a>

```typescript
public putPayload(value: IotCommandPayload): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a>

---

##### `putPreprocessor` <a name="putPreprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPreprocessor"></a>

```typescript
public putPreprocessor(value: IotCommandPreprocessor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPreprocessor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotCommand.IotCommand.putTags"></a>

```typescript
public putTags(value: IResolvable | IotCommandTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommand.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>[]

---

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetCreatedAt"></a>

```typescript
public resetCreatedAt(): void
```

##### `resetDeprecated` <a name="resetDeprecated" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetDeprecated"></a>

```typescript
public resetDeprecated(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetLastUpdatedAt` <a name="resetLastUpdatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetLastUpdatedAt"></a>

```typescript
public resetLastUpdatedAt(): void
```

##### `resetMandatoryParameters` <a name="resetMandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetMandatoryParameters"></a>

```typescript
public resetMandatoryParameters(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPayload"></a>

```typescript
public resetPayload(): void
```

##### `resetPayloadTemplate` <a name="resetPayloadTemplate" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPayloadTemplate"></a>

```typescript
public resetPayloadTemplate(): void
```

##### `resetPendingDeletion` <a name="resetPendingDeletion" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPendingDeletion"></a>

```typescript
public resetPendingDeletion(): void
```

##### `resetPreprocessor` <a name="resetPreprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPreprocessor"></a>

```typescript
public resetPreprocessor(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotCommand resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotCommand.IotCommand.isConstruct"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

iotCommand.IotCommand.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCommand.IotCommand.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformElement"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

iotCommand.IotCommand.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformResource"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

iotCommand.IotCommand.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

iotCommand.IotCommand.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotCommand resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotCommand to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotCommand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotCommand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.commandArn">commandArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParameters">mandatoryParameters</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList">IotCommandMandatoryParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference">IotCommandPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessor">preprocessor</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference">IotCommandPreprocessorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList">IotCommandTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.commandIdInput">commandIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAtInput">createdAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecatedInput">deprecatedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAtInput">lastUpdatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParametersInput">mandatoryParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadInput">payloadInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplateInput">payloadTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletionInput">pendingDeletionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessorInput">preprocessorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.commandId">commandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecated">deprecated</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplate">payloadTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletion">pendingDeletion</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `commandArn`<sup>Required</sup> <a name="commandArn" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.commandArn"></a>

```typescript
public readonly commandArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mandatoryParameters`<sup>Required</sup> <a name="mandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParameters"></a>

```typescript
public readonly mandatoryParameters: IotCommandMandatoryParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList">IotCommandMandatoryParametersList</a>

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payload"></a>

```typescript
public readonly payload: IotCommandPayloadOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference">IotCommandPayloadOutputReference</a>

---

##### `preprocessor`<sup>Required</sup> <a name="preprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessor"></a>

```typescript
public readonly preprocessor: IotCommandPreprocessorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference">IotCommandPreprocessorOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.tags"></a>

```typescript
public readonly tags: IotCommandTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList">IotCommandTagsList</a>

---

##### `commandIdInput`<sup>Optional</sup> <a name="commandIdInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.commandIdInput"></a>

```typescript
public readonly commandIdInput: string;
```

- *Type:* string

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAtInput"></a>

```typescript
public readonly createdAtInput: string;
```

- *Type:* string

---

##### `deprecatedInput`<sup>Optional</sup> <a name="deprecatedInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecatedInput"></a>

```typescript
public readonly deprecatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `lastUpdatedAtInput`<sup>Optional</sup> <a name="lastUpdatedAtInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAtInput"></a>

```typescript
public readonly lastUpdatedAtInput: string;
```

- *Type:* string

---

##### `mandatoryParametersInput`<sup>Optional</sup> <a name="mandatoryParametersInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParametersInput"></a>

```typescript
public readonly mandatoryParametersInput: IResolvable | IotCommandMandatoryParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>[]

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadInput"></a>

```typescript
public readonly payloadInput: IResolvable | IotCommandPayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a>

---

##### `payloadTemplateInput`<sup>Optional</sup> <a name="payloadTemplateInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplateInput"></a>

```typescript
public readonly payloadTemplateInput: string;
```

- *Type:* string

---

##### `pendingDeletionInput`<sup>Optional</sup> <a name="pendingDeletionInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletionInput"></a>

```typescript
public readonly pendingDeletionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `preprocessorInput`<sup>Optional</sup> <a name="preprocessorInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessorInput"></a>

```typescript
public readonly preprocessorInput: IResolvable | IotCommandPreprocessor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotCommandTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>[]

---

##### `commandId`<sup>Required</sup> <a name="commandId" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.commandId"></a>

```typescript
public readonly commandId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecated"></a>

```typescript
public readonly deprecated: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `payloadTemplate`<sup>Required</sup> <a name="payloadTemplate" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplate"></a>

```typescript
public readonly payloadTemplate: string;
```

- *Type:* string

---

##### `pendingDeletion`<sup>Required</sup> <a name="pendingDeletion" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletion"></a>

```typescript
public readonly pendingDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotCommandConfig <a name="IotCommandConfig" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

const iotCommandConfig: iotCommand.IotCommandConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.commandId">commandId</a></code> | <code>string</code> | The unique identifier for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.createdAt">createdAt</a></code> | <code>string</code> | The date and time when the command was created. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.deprecated">deprecated</a></code> | <code>boolean \| cdktn.IResolvable</code> | A flag indicating whether the command is deprecated. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.description">description</a></code> | <code>string</code> | The description of the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | The date and time when the command was last updated. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.mandatoryParameters">mandatoryParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>[]</code> | The list of mandatory parameters for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.namespace">namespace</a></code> | <code>string</code> | The namespace to which the command belongs. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a></code> | The payload associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payloadTemplate">payloadTemplate</a></code> | <code>string</code> | The payload template associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.pendingDeletion">pendingDeletion</a></code> | <code>boolean \| cdktn.IResolvable</code> | A flag indicating whether the command is pending deletion. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.preprocessor">preprocessor</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a></code> | The command preprocessor configuration. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The customer role associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>[]</code> | The tags to be associated with the command. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `commandId`<sup>Required</sup> <a name="commandId" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.commandId"></a>

```typescript
public readonly commandId: string;
```

- *Type:* string

The unique identifier for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#command_id IotCommand#command_id}

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The date and time when the command was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#created_at IotCommand#created_at}

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.deprecated"></a>

```typescript
public readonly deprecated: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A flag indicating whether the command is deprecated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#deprecated IotCommand#deprecated}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#description IotCommand#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#display_name IotCommand#display_name}

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

The date and time when the command was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#last_updated_at IotCommand#last_updated_at}

---

##### `mandatoryParameters`<sup>Optional</sup> <a name="mandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.mandatoryParameters"></a>

```typescript
public readonly mandatoryParameters: IResolvable | IotCommandMandatoryParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>[]

The list of mandatory parameters for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#mandatory_parameters IotCommand#mandatory_parameters}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace to which the command belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#namespace IotCommand#namespace}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payload"></a>

```typescript
public readonly payload: IotCommandPayload;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a>

The payload associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#payload IotCommand#payload}

---

##### `payloadTemplate`<sup>Optional</sup> <a name="payloadTemplate" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payloadTemplate"></a>

```typescript
public readonly payloadTemplate: string;
```

- *Type:* string

The payload template associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#payload_template IotCommand#payload_template}

---

##### `pendingDeletion`<sup>Optional</sup> <a name="pendingDeletion" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.pendingDeletion"></a>

```typescript
public readonly pendingDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A flag indicating whether the command is pending deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#pending_deletion IotCommand#pending_deletion}

---

##### `preprocessor`<sup>Optional</sup> <a name="preprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.preprocessor"></a>

```typescript
public readonly preprocessor: IotCommandPreprocessor;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a>

The command preprocessor configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#preprocessor IotCommand#preprocessor}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The customer role associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#role_arn IotCommand#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotCommandTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>[]

The tags to be associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#tags IotCommand#tags}

---

### IotCommandMandatoryParameters <a name="IotCommandMandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

const iotCommandMandatoryParameters: iotCommand.IotCommandMandatoryParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#default_value IotCommand#default_value}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#description IotCommand#description}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#name IotCommand#name}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#type IotCommand#type}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#value IotCommand#value}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.valueConditions">valueConditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#value_conditions IotCommand#value_conditions}. |

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.defaultValue"></a>

```typescript
public readonly defaultValue: IotCommandMandatoryParametersDefaultValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#default_value IotCommand#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#description IotCommand#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#name IotCommand#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#type IotCommand#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.value"></a>

```typescript
public readonly value: IotCommandMandatoryParametersValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#value IotCommand#value}.

---

##### `valueConditions`<sup>Optional</sup> <a name="valueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.valueConditions"></a>

```typescript
public readonly valueConditions: IResolvable | IotCommandMandatoryParametersValueConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#value_conditions IotCommand#value_conditions}.

---

### IotCommandMandatoryParametersDefaultValue <a name="IotCommandMandatoryParametersDefaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

const iotCommandMandatoryParametersDefaultValue: iotCommand.IotCommandMandatoryParametersDefaultValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.b">b</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#b IotCommand#b}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.bin">bin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#bin IotCommand#bin}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.d">d</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#d IotCommand#d}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.i">i</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#i IotCommand#i}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.l">l</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#l IotCommand#l}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.s">s</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#s IotCommand#s}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.ul">ul</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#ul IotCommand#ul}. |

---

##### `b`<sup>Optional</sup> <a name="b" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.b"></a>

```typescript
public readonly b: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#b IotCommand#b}.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.bin"></a>

```typescript
public readonly bin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#bin IotCommand#bin}.

---

##### `d`<sup>Optional</sup> <a name="d" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.d"></a>

```typescript
public readonly d: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#d IotCommand#d}.

---

##### `i`<sup>Optional</sup> <a name="i" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.i"></a>

```typescript
public readonly i: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#i IotCommand#i}.

---

##### `l`<sup>Optional</sup> <a name="l" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.l"></a>

```typescript
public readonly l: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#l IotCommand#l}.

---

##### `s`<sup>Optional</sup> <a name="s" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.s"></a>

```typescript
public readonly s: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#s IotCommand#s}.

---

##### `ul`<sup>Optional</sup> <a name="ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.ul"></a>

```typescript
public readonly ul: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#ul IotCommand#ul}.

---

### IotCommandMandatoryParametersValue <a name="IotCommandMandatoryParametersValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

const iotCommandMandatoryParametersValue: iotCommand.IotCommandMandatoryParametersValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.b">b</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#b IotCommand#b}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.bin">bin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#bin IotCommand#bin}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.d">d</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#d IotCommand#d}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.i">i</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#i IotCommand#i}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.l">l</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#l IotCommand#l}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.s">s</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#s IotCommand#s}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.ul">ul</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#ul IotCommand#ul}. |

---

##### `b`<sup>Optional</sup> <a name="b" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.b"></a>

```typescript
public readonly b: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#b IotCommand#b}.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.bin"></a>

```typescript
public readonly bin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#bin IotCommand#bin}.

---

##### `d`<sup>Optional</sup> <a name="d" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.d"></a>

```typescript
public readonly d: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#d IotCommand#d}.

---

##### `i`<sup>Optional</sup> <a name="i" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.i"></a>

```typescript
public readonly i: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#i IotCommand#i}.

---

##### `l`<sup>Optional</sup> <a name="l" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.l"></a>

```typescript
public readonly l: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#l IotCommand#l}.

---

##### `s`<sup>Optional</sup> <a name="s" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.s"></a>

```typescript
public readonly s: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#s IotCommand#s}.

---

##### `ul`<sup>Optional</sup> <a name="ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.ul"></a>

```typescript
public readonly ul: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#ul IotCommand#ul}.

---

### IotCommandMandatoryParametersValueConditions <a name="IotCommandMandatoryParametersValueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

const iotCommandMandatoryParametersValueConditions: iotCommand.IotCommandMandatoryParametersValueConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#comparison_operator IotCommand#comparison_operator}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.operand">operand</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#operand IotCommand#operand}. |

---

##### `comparisonOperator`<sup>Optional</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#comparison_operator IotCommand#comparison_operator}.

---

##### `operand`<sup>Optional</sup> <a name="operand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.operand"></a>

```typescript
public readonly operand: IotCommandMandatoryParametersValueConditionsOperand;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#operand IotCommand#operand}.

---

### IotCommandMandatoryParametersValueConditionsOperand <a name="IotCommandMandatoryParametersValueConditionsOperand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

const iotCommandMandatoryParametersValueConditionsOperand: iotCommand.IotCommandMandatoryParametersValueConditionsOperand = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.number">number</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#number IotCommand#number}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numberRange">numberRange</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#number_range IotCommand#number_range}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numbers">numbers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#numbers IotCommand#numbers}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.string">string</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#string IotCommand#string}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.strings">strings</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#strings IotCommand#strings}. |

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.number"></a>

```typescript
public readonly number: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#number IotCommand#number}.

---

##### `numberRange`<sup>Optional</sup> <a name="numberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numberRange"></a>

```typescript
public readonly numberRange: IotCommandMandatoryParametersValueConditionsOperandNumberRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#number_range IotCommand#number_range}.

---

##### `numbers`<sup>Optional</sup> <a name="numbers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numbers"></a>

```typescript
public readonly numbers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#numbers IotCommand#numbers}.

---

##### `string`<sup>Optional</sup> <a name="string" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.string"></a>

```typescript
public readonly string: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#string IotCommand#string}.

---

##### `strings`<sup>Optional</sup> <a name="strings" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.strings"></a>

```typescript
public readonly strings: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#strings IotCommand#strings}.

---

### IotCommandMandatoryParametersValueConditionsOperandNumberRange <a name="IotCommandMandatoryParametersValueConditionsOperandNumberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

const iotCommandMandatoryParametersValueConditionsOperandNumberRange: iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.max">max</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#max IotCommand#max}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.min">min</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#min IotCommand#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.max"></a>

```typescript
public readonly max: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#max IotCommand#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.min"></a>

```typescript
public readonly min: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#min IotCommand#min}.

---

### IotCommandPayload <a name="IotCommandPayload" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

const iotCommandPayload: iotCommand.IotCommandPayload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#content IotCommand#content}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#content_type IotCommand#content_type}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#content IotCommand#content}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#content_type IotCommand#content_type}.

---

### IotCommandPreprocessor <a name="IotCommandPreprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

const iotCommandPreprocessor: iotCommand.IotCommandPreprocessor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor.property.awsJsonSubstitution">awsJsonSubstitution</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#aws_json_substitution IotCommand#aws_json_substitution}. |

---

##### `awsJsonSubstitution`<sup>Optional</sup> <a name="awsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor.property.awsJsonSubstitution"></a>

```typescript
public readonly awsJsonSubstitution: IotCommandPreprocessorAwsJsonSubstitution;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#aws_json_substitution IotCommand#aws_json_substitution}.

---

### IotCommandPreprocessorAwsJsonSubstitution <a name="IotCommandPreprocessorAwsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

const iotCommandPreprocessorAwsJsonSubstitution: iotCommand.IotCommandPreprocessorAwsJsonSubstitution = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution.property.outputFormat">outputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#output_format IotCommand#output_format}. |

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#output_format IotCommand#output_format}.

---

### IotCommandTags <a name="IotCommandTags" id="@cdktn/provider-awscc.iotCommand.IotCommandTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandTags.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

const iotCommandTags: iotCommand.IotCommandTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags.property.key">key</a></code> | <code>string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags.property.value">value</a></code> | <code>string</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotCommand.IotCommandTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#key IotCommand#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_command#value IotCommand#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotCommandMandatoryParametersDefaultValueOutputReference <a name="IotCommandMandatoryParametersDefaultValueOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

new iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetB">resetB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetBin">resetBin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetD">resetD</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetI">resetI</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetL">resetL</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetS">resetS</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetUl">resetUl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetB` <a name="resetB" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetB"></a>

```typescript
public resetB(): void
```

##### `resetBin` <a name="resetBin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetBin"></a>

```typescript
public resetBin(): void
```

##### `resetD` <a name="resetD" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetD"></a>

```typescript
public resetD(): void
```

##### `resetI` <a name="resetI" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetI"></a>

```typescript
public resetI(): void
```

##### `resetL` <a name="resetL" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetL"></a>

```typescript
public resetL(): void
```

##### `resetS` <a name="resetS" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetS"></a>

```typescript
public resetS(): void
```

##### `resetUl` <a name="resetUl" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetUl"></a>

```typescript
public resetUl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.binInput">binInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bInput">bInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.dInput">dInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.iInput">iInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.lInput">lInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.sInput">sInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ulInput">ulInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.b">b</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bin">bin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.d">d</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.i">i</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.l">l</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.s">s</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ul">ul</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `binInput`<sup>Optional</sup> <a name="binInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.binInput"></a>

```typescript
public readonly binInput: string;
```

- *Type:* string

---

##### `bInput`<sup>Optional</sup> <a name="bInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bInput"></a>

```typescript
public readonly bInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dInput`<sup>Optional</sup> <a name="dInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.dInput"></a>

```typescript
public readonly dInput: number;
```

- *Type:* number

---

##### `iInput`<sup>Optional</sup> <a name="iInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.iInput"></a>

```typescript
public readonly iInput: number;
```

- *Type:* number

---

##### `lInput`<sup>Optional</sup> <a name="lInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.lInput"></a>

```typescript
public readonly lInput: string;
```

- *Type:* string

---

##### `sInput`<sup>Optional</sup> <a name="sInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.sInput"></a>

```typescript
public readonly sInput: string;
```

- *Type:* string

---

##### `ulInput`<sup>Optional</sup> <a name="ulInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ulInput"></a>

```typescript
public readonly ulInput: string;
```

- *Type:* string

---

##### `b`<sup>Required</sup> <a name="b" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.b"></a>

```typescript
public readonly b: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bin`<sup>Required</sup> <a name="bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bin"></a>

```typescript
public readonly bin: string;
```

- *Type:* string

---

##### `d`<sup>Required</sup> <a name="d" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.d"></a>

```typescript
public readonly d: number;
```

- *Type:* number

---

##### `i`<sup>Required</sup> <a name="i" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.i"></a>

```typescript
public readonly i: number;
```

- *Type:* number

---

##### `l`<sup>Required</sup> <a name="l" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.l"></a>

```typescript
public readonly l: string;
```

- *Type:* string

---

##### `s`<sup>Required</sup> <a name="s" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.s"></a>

```typescript
public readonly s: string;
```

- *Type:* string

---

##### `ul`<sup>Required</sup> <a name="ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ul"></a>

```typescript
public readonly ul: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotCommandMandatoryParametersDefaultValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a>

---


### IotCommandMandatoryParametersList <a name="IotCommandMandatoryParametersList" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

new iotCommand.IotCommandMandatoryParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.get"></a>

```typescript
public get(index: number): IotCommandMandatoryParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotCommandMandatoryParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>[]

---


### IotCommandMandatoryParametersOutputReference <a name="IotCommandMandatoryParametersOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

new iotCommand.IotCommandMandatoryParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue">putDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValueConditions">putValueConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValueConditions">resetValueConditions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultValue` <a name="putDefaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue"></a>

```typescript
public putDefaultValue(value: IotCommandMandatoryParametersDefaultValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a>

---

##### `putValue` <a name="putValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue"></a>

```typescript
public putValue(value: IotCommandMandatoryParametersValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a>

---

##### `putValueConditions` <a name="putValueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValueConditions"></a>

```typescript
public putValueConditions(value: IResolvable | IotCommandMandatoryParametersValueConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValueConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>[]

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValueConditions` <a name="resetValueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValueConditions"></a>

```typescript
public resetValueConditions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference">IotCommandMandatoryParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference">IotCommandMandatoryParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditions">valueConditions</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList">IotCommandMandatoryParametersValueConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditionsInput">valueConditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueInput">valueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: IotCommandMandatoryParametersDefaultValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference">IotCommandMandatoryParametersDefaultValueOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.value"></a>

```typescript
public readonly value: IotCommandMandatoryParametersValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference">IotCommandMandatoryParametersValueOutputReference</a>

---

##### `valueConditions`<sup>Required</sup> <a name="valueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditions"></a>

```typescript
public readonly valueConditions: IotCommandMandatoryParametersValueConditionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList">IotCommandMandatoryParametersValueConditionsList</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: IResolvable | IotCommandMandatoryParametersDefaultValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueConditionsInput`<sup>Optional</sup> <a name="valueConditionsInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditionsInput"></a>

```typescript
public readonly valueConditionsInput: IResolvable | IotCommandMandatoryParametersValueConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>[]

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: IResolvable | IotCommandMandatoryParametersValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotCommandMandatoryParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>

---


### IotCommandMandatoryParametersValueConditionsList <a name="IotCommandMandatoryParametersValueConditionsList" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

new iotCommand.IotCommandMandatoryParametersValueConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.get"></a>

```typescript
public get(index: number): IotCommandMandatoryParametersValueConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotCommandMandatoryParametersValueConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>[]

---


### IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference <a name="IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

new iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMax"></a>

```typescript
public resetMax(): void
```

##### `resetMin` <a name="resetMin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMin"></a>

```typescript
public resetMin(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.maxInput">maxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.minInput">minInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.max">max</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.min">min</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: string;
```

- *Type:* string

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.max"></a>

```typescript
public readonly max: string;
```

- *Type:* string

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.min"></a>

```typescript
public readonly min: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotCommandMandatoryParametersValueConditionsOperandNumberRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a>

---


### IotCommandMandatoryParametersValueConditionsOperandOutputReference <a name="IotCommandMandatoryParametersValueConditionsOperandOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

new iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.putNumberRange">putNumberRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumber">resetNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumberRange">resetNumberRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumbers">resetNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetString">resetString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetStrings">resetStrings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNumberRange` <a name="putNumberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.putNumberRange"></a>

```typescript
public putNumberRange(value: IotCommandMandatoryParametersValueConditionsOperandNumberRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.putNumberRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a>

---

##### `resetNumber` <a name="resetNumber" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumber"></a>

```typescript
public resetNumber(): void
```

##### `resetNumberRange` <a name="resetNumberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumberRange"></a>

```typescript
public resetNumberRange(): void
```

##### `resetNumbers` <a name="resetNumbers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumbers"></a>

```typescript
public resetNumbers(): void
```

##### `resetString` <a name="resetString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetString"></a>

```typescript
public resetString(): void
```

##### `resetStrings` <a name="resetStrings" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetStrings"></a>

```typescript
public resetStrings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRange">numberRange</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference">IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberInput">numberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRangeInput">numberRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbersInput">numbersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringInput">stringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringsInput">stringsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.number">number</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbers">numbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.string">string</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.strings">strings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberRange`<sup>Required</sup> <a name="numberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRange"></a>

```typescript
public readonly numberRange: IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference">IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference</a>

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberInput"></a>

```typescript
public readonly numberInput: string;
```

- *Type:* string

---

##### `numberRangeInput`<sup>Optional</sup> <a name="numberRangeInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRangeInput"></a>

```typescript
public readonly numberRangeInput: IResolvable | IotCommandMandatoryParametersValueConditionsOperandNumberRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a>

---

##### `numbersInput`<sup>Optional</sup> <a name="numbersInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbersInput"></a>

```typescript
public readonly numbersInput: string[];
```

- *Type:* string[]

---

##### `stringInput`<sup>Optional</sup> <a name="stringInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringInput"></a>

```typescript
public readonly stringInput: string;
```

- *Type:* string

---

##### `stringsInput`<sup>Optional</sup> <a name="stringsInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringsInput"></a>

```typescript
public readonly stringsInput: string[];
```

- *Type:* string[]

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.number"></a>

```typescript
public readonly number: string;
```

- *Type:* string

---

##### `numbers`<sup>Required</sup> <a name="numbers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbers"></a>

```typescript
public readonly numbers: string[];
```

- *Type:* string[]

---

##### `string`<sup>Required</sup> <a name="string" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.string"></a>

```typescript
public readonly string: string;
```

- *Type:* string

---

##### `strings`<sup>Required</sup> <a name="strings" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.strings"></a>

```typescript
public readonly strings: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotCommandMandatoryParametersValueConditionsOperand;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a>

---


### IotCommandMandatoryParametersValueConditionsOutputReference <a name="IotCommandMandatoryParametersValueConditionsOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

new iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.putOperand">putOperand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetComparisonOperator">resetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetOperand">resetOperand</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperand` <a name="putOperand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.putOperand"></a>

```typescript
public putOperand(value: IotCommandMandatoryParametersValueConditionsOperand): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.putOperand.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a>

---

##### `resetComparisonOperator` <a name="resetComparisonOperator" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetComparisonOperator"></a>

```typescript
public resetComparisonOperator(): void
```

##### `resetOperand` <a name="resetOperand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetOperand"></a>

```typescript
public resetOperand(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operand">operand</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference">IotCommandMandatoryParametersValueConditionsOperandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operandInput">operandInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operand`<sup>Required</sup> <a name="operand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operand"></a>

```typescript
public readonly operand: IotCommandMandatoryParametersValueConditionsOperandOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference">IotCommandMandatoryParametersValueConditionsOperandOutputReference</a>

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `operandInput`<sup>Optional</sup> <a name="operandInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operandInput"></a>

```typescript
public readonly operandInput: IResolvable | IotCommandMandatoryParametersValueConditionsOperand;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a>

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotCommandMandatoryParametersValueConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>

---


### IotCommandMandatoryParametersValueOutputReference <a name="IotCommandMandatoryParametersValueOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

new iotCommand.IotCommandMandatoryParametersValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetB">resetB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetBin">resetBin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetD">resetD</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetI">resetI</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetL">resetL</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetS">resetS</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetUl">resetUl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetB` <a name="resetB" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetB"></a>

```typescript
public resetB(): void
```

##### `resetBin` <a name="resetBin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetBin"></a>

```typescript
public resetBin(): void
```

##### `resetD` <a name="resetD" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetD"></a>

```typescript
public resetD(): void
```

##### `resetI` <a name="resetI" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetI"></a>

```typescript
public resetI(): void
```

##### `resetL` <a name="resetL" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetL"></a>

```typescript
public resetL(): void
```

##### `resetS` <a name="resetS" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetS"></a>

```typescript
public resetS(): void
```

##### `resetUl` <a name="resetUl" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetUl"></a>

```typescript
public resetUl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.binInput">binInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bInput">bInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.dInput">dInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.iInput">iInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.lInput">lInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.sInput">sInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ulInput">ulInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.b">b</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bin">bin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.d">d</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.i">i</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.l">l</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.s">s</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ul">ul</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `binInput`<sup>Optional</sup> <a name="binInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.binInput"></a>

```typescript
public readonly binInput: string;
```

- *Type:* string

---

##### `bInput`<sup>Optional</sup> <a name="bInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bInput"></a>

```typescript
public readonly bInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dInput`<sup>Optional</sup> <a name="dInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.dInput"></a>

```typescript
public readonly dInput: number;
```

- *Type:* number

---

##### `iInput`<sup>Optional</sup> <a name="iInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.iInput"></a>

```typescript
public readonly iInput: number;
```

- *Type:* number

---

##### `lInput`<sup>Optional</sup> <a name="lInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.lInput"></a>

```typescript
public readonly lInput: string;
```

- *Type:* string

---

##### `sInput`<sup>Optional</sup> <a name="sInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.sInput"></a>

```typescript
public readonly sInput: string;
```

- *Type:* string

---

##### `ulInput`<sup>Optional</sup> <a name="ulInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ulInput"></a>

```typescript
public readonly ulInput: string;
```

- *Type:* string

---

##### `b`<sup>Required</sup> <a name="b" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.b"></a>

```typescript
public readonly b: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bin`<sup>Required</sup> <a name="bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bin"></a>

```typescript
public readonly bin: string;
```

- *Type:* string

---

##### `d`<sup>Required</sup> <a name="d" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.d"></a>

```typescript
public readonly d: number;
```

- *Type:* number

---

##### `i`<sup>Required</sup> <a name="i" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.i"></a>

```typescript
public readonly i: number;
```

- *Type:* number

---

##### `l`<sup>Required</sup> <a name="l" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.l"></a>

```typescript
public readonly l: string;
```

- *Type:* string

---

##### `s`<sup>Required</sup> <a name="s" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.s"></a>

```typescript
public readonly s: string;
```

- *Type:* string

---

##### `ul`<sup>Required</sup> <a name="ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ul"></a>

```typescript
public readonly ul: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotCommandMandatoryParametersValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a>

---


### IotCommandPayloadOutputReference <a name="IotCommandPayloadOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

new iotCommand.IotCommandPayloadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContentType">resetContentType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotCommandPayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a>

---


### IotCommandPreprocessorAwsJsonSubstitutionOutputReference <a name="IotCommandPreprocessorAwsJsonSubstitutionOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

new iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resetOutputFormat"></a>

```typescript
public resetOutputFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormatInput">outputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormat">outputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormatInput"></a>

```typescript
public readonly outputFormatInput: string;
```

- *Type:* string

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotCommandPreprocessorAwsJsonSubstitution;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a>

---


### IotCommandPreprocessorOutputReference <a name="IotCommandPreprocessorOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

new iotCommand.IotCommandPreprocessorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.putAwsJsonSubstitution">putAwsJsonSubstitution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resetAwsJsonSubstitution">resetAwsJsonSubstitution</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsJsonSubstitution` <a name="putAwsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.putAwsJsonSubstitution"></a>

```typescript
public putAwsJsonSubstitution(value: IotCommandPreprocessorAwsJsonSubstitution): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.putAwsJsonSubstitution.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a>

---

##### `resetAwsJsonSubstitution` <a name="resetAwsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resetAwsJsonSubstitution"></a>

```typescript
public resetAwsJsonSubstitution(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitution">awsJsonSubstitution</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference">IotCommandPreprocessorAwsJsonSubstitutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitutionInput">awsJsonSubstitutionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsJsonSubstitution`<sup>Required</sup> <a name="awsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitution"></a>

```typescript
public readonly awsJsonSubstitution: IotCommandPreprocessorAwsJsonSubstitutionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference">IotCommandPreprocessorAwsJsonSubstitutionOutputReference</a>

---

##### `awsJsonSubstitutionInput`<sup>Optional</sup> <a name="awsJsonSubstitutionInput" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitutionInput"></a>

```typescript
public readonly awsJsonSubstitutionInput: IResolvable | IotCommandPreprocessorAwsJsonSubstitution;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotCommandPreprocessor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a>

---


### IotCommandTagsList <a name="IotCommandTagsList" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

new iotCommand.IotCommandTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.get"></a>

```typescript
public get(index: number): IotCommandTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotCommandTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>[]

---


### IotCommandTagsOutputReference <a name="IotCommandTagsOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer"></a>

```typescript
import { iotCommand } from '@cdktn/provider-awscc'

new iotCommand.IotCommandTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotCommandTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>

---



