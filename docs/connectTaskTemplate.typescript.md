# `connectTaskTemplate` Submodule <a name="`connectTaskTemplate` Submodule" id="@cdktn/provider-awscc.connectTaskTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectTaskTemplate <a name="ConnectTaskTemplate" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template awscc_connect_task_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

new connectTaskTemplate.ConnectTaskTemplate(scope: Construct, id: string, config: ConnectTaskTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig">ConnectTaskTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig">ConnectTaskTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putConstraints">putConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putDefaults">putDefaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetConstraints">resetConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetContactFlowArn">resetContactFlowArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetDefaults">resetDefaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetSelfAssignContactFlowArn">resetSelfAssignContactFlowArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConstraints` <a name="putConstraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putConstraints"></a>

```typescript
public putConstraints(value: ConnectTaskTemplateConstraints): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a>

---

##### `putDefaults` <a name="putDefaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putDefaults"></a>

```typescript
public putDefaults(value: IResolvable | ConnectTaskTemplateDefaults[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putDefaults.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>[]

---

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putFields"></a>

```typescript
public putFields(value: IResolvable | ConnectTaskTemplateFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putTags"></a>

```typescript
public putTags(value: IResolvable | ConnectTaskTemplateTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>[]

---

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetClientToken"></a>

```typescript
public resetClientToken(): void
```

##### `resetConstraints` <a name="resetConstraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetConstraints"></a>

```typescript
public resetConstraints(): void
```

##### `resetContactFlowArn` <a name="resetContactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetContactFlowArn"></a>

```typescript
public resetContactFlowArn(): void
```

##### `resetDefaults` <a name="resetDefaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetDefaults"></a>

```typescript
public resetDefaults(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFields` <a name="resetFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSelfAssignContactFlowArn` <a name="resetSelfAssignContactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetSelfAssignContactFlowArn"></a>

```typescript
public resetSelfAssignContactFlowArn(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectTaskTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isConstruct"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

connectTaskTemplate.ConnectTaskTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformElement"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

connectTaskTemplate.ConnectTaskTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformResource"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

connectTaskTemplate.ConnectTaskTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectTaskTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectTaskTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectTaskTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectTaskTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.constraints">constraints</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference">ConnectTaskTemplateConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.defaults">defaults</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList">ConnectTaskTemplateDefaultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList">ConnectTaskTemplateFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList">ConnectTaskTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.clientTokenInput">clientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.constraintsInput">constraintsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.contactFlowArnInput">contactFlowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.defaultsInput">defaultsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.selfAssignContactFlowArnInput">selfAssignContactFlowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.contactFlowArn">contactFlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.selfAssignContactFlowArn">selfAssignContactFlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.constraints"></a>

```typescript
public readonly constraints: ConnectTaskTemplateConstraintsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference">ConnectTaskTemplateConstraintsOutputReference</a>

---

##### `defaults`<sup>Required</sup> <a name="defaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.defaults"></a>

```typescript
public readonly defaults: ConnectTaskTemplateDefaultsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList">ConnectTaskTemplateDefaultsList</a>

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fields"></a>

```typescript
public readonly fields: ConnectTaskTemplateFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList">ConnectTaskTemplateFieldsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tags"></a>

```typescript
public readonly tags: ConnectTaskTemplateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList">ConnectTaskTemplateTagsList</a>

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.clientTokenInput"></a>

```typescript
public readonly clientTokenInput: string;
```

- *Type:* string

---

##### `constraintsInput`<sup>Optional</sup> <a name="constraintsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.constraintsInput"></a>

```typescript
public readonly constraintsInput: IResolvable | ConnectTaskTemplateConstraints;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a>

---

##### `contactFlowArnInput`<sup>Optional</sup> <a name="contactFlowArnInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.contactFlowArnInput"></a>

```typescript
public readonly contactFlowArnInput: string;
```

- *Type:* string

---

##### `defaultsInput`<sup>Optional</sup> <a name="defaultsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.defaultsInput"></a>

```typescript
public readonly defaultsInput: IResolvable | ConnectTaskTemplateDefaults[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | ConnectTaskTemplateFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>[]

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `selfAssignContactFlowArnInput`<sup>Optional</sup> <a name="selfAssignContactFlowArnInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.selfAssignContactFlowArnInput"></a>

```typescript
public readonly selfAssignContactFlowArnInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ConnectTaskTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>[]

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `contactFlowArn`<sup>Required</sup> <a name="contactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.contactFlowArn"></a>

```typescript
public readonly contactFlowArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `selfAssignContactFlowArn`<sup>Required</sup> <a name="selfAssignContactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.selfAssignContactFlowArn"></a>

```typescript
public readonly selfAssignContactFlowArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectTaskTemplateConfig <a name="ConnectTaskTemplateConfig" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

const connectTaskTemplateConfig: connectTaskTemplate.ConnectTaskTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | The identifier (arn) of the instance. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.clientToken">clientToken</a></code> | <code>string</code> | the client token string in uuid format. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.constraints">constraints</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a></code> | The constraints for the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.contactFlowArn">contactFlowArn</a></code> | <code>string</code> | The identifier of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.defaults">defaults</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#defaults ConnectTaskTemplate#defaults}. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.description">description</a></code> | <code>string</code> | The description of the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>[]</code> | The list of task template's fields. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.name">name</a></code> | <code>string</code> | The name of the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.selfAssignContactFlowArn">selfAssignContactFlowArn</a></code> | <code>string</code> | The identifier of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.status">status</a></code> | <code>string</code> | The status of the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>[]</code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The identifier (arn) of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#instance_arn ConnectTaskTemplate#instance_arn}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

the client token string in uuid format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#client_token ConnectTaskTemplate#client_token}

---

##### `constraints`<sup>Optional</sup> <a name="constraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.constraints"></a>

```typescript
public readonly constraints: ConnectTaskTemplateConstraints;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a>

The constraints for the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#constraints ConnectTaskTemplate#constraints}

---

##### `contactFlowArn`<sup>Optional</sup> <a name="contactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.contactFlowArn"></a>

```typescript
public readonly contactFlowArn: string;
```

- *Type:* string

The identifier of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#contact_flow_arn ConnectTaskTemplate#contact_flow_arn}

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.defaults"></a>

```typescript
public readonly defaults: IResolvable | ConnectTaskTemplateDefaults[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#defaults ConnectTaskTemplate#defaults}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#description ConnectTaskTemplate#description}

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.fields"></a>

```typescript
public readonly fields: IResolvable | ConnectTaskTemplateFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>[]

The list of task template's fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#fields ConnectTaskTemplate#fields}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

##### `selfAssignContactFlowArn`<sup>Optional</sup> <a name="selfAssignContactFlowArn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.selfAssignContactFlowArn"></a>

```typescript
public readonly selfAssignContactFlowArn: string;
```

- *Type:* string

The identifier of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#self_assign_contact_flow_arn ConnectTaskTemplate#self_assign_contact_flow_arn}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#status ConnectTaskTemplate#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ConnectTaskTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#tags ConnectTaskTemplate#tags}

---

### ConnectTaskTemplateConstraints <a name="ConnectTaskTemplateConstraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

const connectTaskTemplateConstraints: connectTaskTemplate.ConnectTaskTemplateConstraints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.invisibleFields">invisibleFields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>[]</code> | The list of the task template's invisible fields. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.readOnlyFields">readOnlyFields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>[]</code> | The list of the task template's read only fields. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.requiredFields">requiredFields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>[]</code> | The list of the task template's required fields. |

---

##### `invisibleFields`<sup>Optional</sup> <a name="invisibleFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.invisibleFields"></a>

```typescript
public readonly invisibleFields: IResolvable | ConnectTaskTemplateConstraintsInvisibleFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>[]

The list of the task template's invisible fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#invisible_fields ConnectTaskTemplate#invisible_fields}

---

##### `readOnlyFields`<sup>Optional</sup> <a name="readOnlyFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.readOnlyFields"></a>

```typescript
public readonly readOnlyFields: IResolvable | ConnectTaskTemplateConstraintsReadOnlyFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>[]

The list of the task template's read only fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#read_only_fields ConnectTaskTemplate#read_only_fields}

---

##### `requiredFields`<sup>Optional</sup> <a name="requiredFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.requiredFields"></a>

```typescript
public readonly requiredFields: IResolvable | ConnectTaskTemplateConstraintsRequiredFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>[]

The list of the task template's required fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#required_fields ConnectTaskTemplate#required_fields}

---

### ConnectTaskTemplateConstraintsInvisibleFields <a name="ConnectTaskTemplateConstraintsInvisibleFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

const connectTaskTemplateConstraintsInvisibleFields: connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a></code> | the identifier (name) for the task template field. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields.property.id"></a>

```typescript
public readonly id: ConnectTaskTemplateConstraintsInvisibleFieldsId;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectTaskTemplateConstraintsInvisibleFieldsId <a name="ConnectTaskTemplateConstraintsInvisibleFieldsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

const connectTaskTemplateConstraintsInvisibleFieldsId: connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId.property.name">name</a></code> | <code>string</code> | The name of the task template field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateConstraintsReadOnlyFields <a name="ConnectTaskTemplateConstraintsReadOnlyFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

const connectTaskTemplateConstraintsReadOnlyFields: connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a></code> | the identifier (name) for the task template field. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields.property.id"></a>

```typescript
public readonly id: ConnectTaskTemplateConstraintsReadOnlyFieldsId;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectTaskTemplateConstraintsReadOnlyFieldsId <a name="ConnectTaskTemplateConstraintsReadOnlyFieldsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

const connectTaskTemplateConstraintsReadOnlyFieldsId: connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId.property.name">name</a></code> | <code>string</code> | The name of the task template field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateConstraintsRequiredFields <a name="ConnectTaskTemplateConstraintsRequiredFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

const connectTaskTemplateConstraintsRequiredFields: connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a></code> | the identifier (name) for the task template field. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields.property.id"></a>

```typescript
public readonly id: ConnectTaskTemplateConstraintsRequiredFieldsId;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectTaskTemplateConstraintsRequiredFieldsId <a name="ConnectTaskTemplateConstraintsRequiredFieldsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

const connectTaskTemplateConstraintsRequiredFieldsId: connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId.property.name">name</a></code> | <code>string</code> | The name of the task template field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateDefaults <a name="ConnectTaskTemplateDefaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

const connectTaskTemplateDefaults: connectTaskTemplate.ConnectTaskTemplateDefaults = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.property.defaultValue">defaultValue</a></code> | <code>string</code> | the default value for the task template's field. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a></code> | the identifier (name) for the task template field. |

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

the default value for the task template's field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#default_value ConnectTaskTemplate#default_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.property.id"></a>

```typescript
public readonly id: ConnectTaskTemplateDefaultsId;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectTaskTemplateDefaultsId <a name="ConnectTaskTemplateDefaultsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

const connectTaskTemplateDefaultsId: connectTaskTemplate.ConnectTaskTemplateDefaultsId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId.property.name">name</a></code> | <code>string</code> | The name of the task template field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateFields <a name="ConnectTaskTemplateFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

const connectTaskTemplateFields: connectTaskTemplate.ConnectTaskTemplateFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.description">description</a></code> | <code>string</code> | The description of the task template's field. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a></code> | the identifier (name) for the task template field. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.singleSelectOptions">singleSelectOptions</a></code> | <code>string[]</code> | list of field options to be used with single select. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.type">type</a></code> | <code>string</code> | The type of the task template's field. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the task template's field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#description ConnectTaskTemplate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.id"></a>

```typescript
public readonly id: ConnectTaskTemplateFieldsId;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `singleSelectOptions`<sup>Optional</sup> <a name="singleSelectOptions" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.singleSelectOptions"></a>

```typescript
public readonly singleSelectOptions: string[];
```

- *Type:* string[]

list of field options to be used with single select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#single_select_options ConnectTaskTemplate#single_select_options}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the task template's field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#type ConnectTaskTemplate#type}

---

### ConnectTaskTemplateFieldsId <a name="ConnectTaskTemplateFieldsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

const connectTaskTemplateFieldsId: connectTaskTemplate.ConnectTaskTemplateFieldsId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId.property.name">name</a></code> | <code>string</code> | The name of the task template field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateTags <a name="ConnectTaskTemplateTags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

const connectTaskTemplateTags: connectTaskTemplate.ConnectTaskTemplateTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#key ConnectTaskTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_task_template#value ConnectTaskTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference <a name="ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

new connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTaskTemplateConstraintsInvisibleFieldsId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a>

---


### ConnectTaskTemplateConstraintsInvisibleFieldsList <a name="ConnectTaskTemplateConstraintsInvisibleFieldsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

new connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.get"></a>

```typescript
public get(index: number): ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTaskTemplateConstraintsInvisibleFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>[]

---


### ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference <a name="ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

new connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.putId">putId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putId` <a name="putId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.putId"></a>

```typescript
public putId(value: ConnectTaskTemplateConstraintsInvisibleFieldsId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.putId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference">ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.idInput">idInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.id"></a>

```typescript
public readonly id: ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference">ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: IResolvable | ConnectTaskTemplateConstraintsInvisibleFieldsId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTaskTemplateConstraintsInvisibleFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>

---


### ConnectTaskTemplateConstraintsOutputReference <a name="ConnectTaskTemplateConstraintsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

new connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putInvisibleFields">putInvisibleFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putReadOnlyFields">putReadOnlyFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putRequiredFields">putRequiredFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetInvisibleFields">resetInvisibleFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetReadOnlyFields">resetReadOnlyFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetRequiredFields">resetRequiredFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInvisibleFields` <a name="putInvisibleFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putInvisibleFields"></a>

```typescript
public putInvisibleFields(value: IResolvable | ConnectTaskTemplateConstraintsInvisibleFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putInvisibleFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>[]

---

##### `putReadOnlyFields` <a name="putReadOnlyFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putReadOnlyFields"></a>

```typescript
public putReadOnlyFields(value: IResolvable | ConnectTaskTemplateConstraintsReadOnlyFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putReadOnlyFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>[]

---

##### `putRequiredFields` <a name="putRequiredFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putRequiredFields"></a>

```typescript
public putRequiredFields(value: IResolvable | ConnectTaskTemplateConstraintsRequiredFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putRequiredFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>[]

---

##### `resetInvisibleFields` <a name="resetInvisibleFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetInvisibleFields"></a>

```typescript
public resetInvisibleFields(): void
```

##### `resetReadOnlyFields` <a name="resetReadOnlyFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetReadOnlyFields"></a>

```typescript
public resetReadOnlyFields(): void
```

##### `resetRequiredFields` <a name="resetRequiredFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetRequiredFields"></a>

```typescript
public resetRequiredFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.invisibleFields">invisibleFields</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList">ConnectTaskTemplateConstraintsInvisibleFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.readOnlyFields">readOnlyFields</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList">ConnectTaskTemplateConstraintsReadOnlyFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.requiredFields">requiredFields</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList">ConnectTaskTemplateConstraintsRequiredFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.invisibleFieldsInput">invisibleFieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.readOnlyFieldsInput">readOnlyFieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.requiredFieldsInput">requiredFieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `invisibleFields`<sup>Required</sup> <a name="invisibleFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.invisibleFields"></a>

```typescript
public readonly invisibleFields: ConnectTaskTemplateConstraintsInvisibleFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList">ConnectTaskTemplateConstraintsInvisibleFieldsList</a>

---

##### `readOnlyFields`<sup>Required</sup> <a name="readOnlyFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.readOnlyFields"></a>

```typescript
public readonly readOnlyFields: ConnectTaskTemplateConstraintsReadOnlyFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList">ConnectTaskTemplateConstraintsReadOnlyFieldsList</a>

---

##### `requiredFields`<sup>Required</sup> <a name="requiredFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.requiredFields"></a>

```typescript
public readonly requiredFields: ConnectTaskTemplateConstraintsRequiredFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList">ConnectTaskTemplateConstraintsRequiredFieldsList</a>

---

##### `invisibleFieldsInput`<sup>Optional</sup> <a name="invisibleFieldsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.invisibleFieldsInput"></a>

```typescript
public readonly invisibleFieldsInput: IResolvable | ConnectTaskTemplateConstraintsInvisibleFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>[]

---

##### `readOnlyFieldsInput`<sup>Optional</sup> <a name="readOnlyFieldsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.readOnlyFieldsInput"></a>

```typescript
public readonly readOnlyFieldsInput: IResolvable | ConnectTaskTemplateConstraintsReadOnlyFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>[]

---

##### `requiredFieldsInput`<sup>Optional</sup> <a name="requiredFieldsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.requiredFieldsInput"></a>

```typescript
public readonly requiredFieldsInput: IResolvable | ConnectTaskTemplateConstraintsRequiredFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTaskTemplateConstraints;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a>

---


### ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference <a name="ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

new connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTaskTemplateConstraintsReadOnlyFieldsId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a>

---


### ConnectTaskTemplateConstraintsReadOnlyFieldsList <a name="ConnectTaskTemplateConstraintsReadOnlyFieldsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

new connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.get"></a>

```typescript
public get(index: number): ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTaskTemplateConstraintsReadOnlyFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>[]

---


### ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference <a name="ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

new connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.putId">putId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putId` <a name="putId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.putId"></a>

```typescript
public putId(value: ConnectTaskTemplateConstraintsReadOnlyFieldsId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.putId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference">ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.idInput">idInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.id"></a>

```typescript
public readonly id: ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference">ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: IResolvable | ConnectTaskTemplateConstraintsReadOnlyFieldsId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTaskTemplateConstraintsReadOnlyFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>

---


### ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference <a name="ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

new connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTaskTemplateConstraintsRequiredFieldsId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a>

---


### ConnectTaskTemplateConstraintsRequiredFieldsList <a name="ConnectTaskTemplateConstraintsRequiredFieldsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

new connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.get"></a>

```typescript
public get(index: number): ConnectTaskTemplateConstraintsRequiredFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTaskTemplateConstraintsRequiredFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>[]

---


### ConnectTaskTemplateConstraintsRequiredFieldsOutputReference <a name="ConnectTaskTemplateConstraintsRequiredFieldsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

new connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.putId">putId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putId` <a name="putId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.putId"></a>

```typescript
public putId(value: ConnectTaskTemplateConstraintsRequiredFieldsId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.putId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference">ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.idInput">idInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.id"></a>

```typescript
public readonly id: ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference">ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: IResolvable | ConnectTaskTemplateConstraintsRequiredFieldsId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTaskTemplateConstraintsRequiredFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>

---


### ConnectTaskTemplateDefaultsIdOutputReference <a name="ConnectTaskTemplateDefaultsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

new connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTaskTemplateDefaultsId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a>

---


### ConnectTaskTemplateDefaultsList <a name="ConnectTaskTemplateDefaultsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

new connectTaskTemplate.ConnectTaskTemplateDefaultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.get"></a>

```typescript
public get(index: number): ConnectTaskTemplateDefaultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTaskTemplateDefaults[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>[]

---


### ConnectTaskTemplateDefaultsOutputReference <a name="ConnectTaskTemplateDefaultsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

new connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.putId">putId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putId` <a name="putId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.putId"></a>

```typescript
public putId(value: ConnectTaskTemplateDefaultsId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.putId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a>

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference">ConnectTaskTemplateDefaultsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.idInput">idInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.id"></a>

```typescript
public readonly id: ConnectTaskTemplateDefaultsIdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference">ConnectTaskTemplateDefaultsIdOutputReference</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: IResolvable | ConnectTaskTemplateDefaultsId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a>

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTaskTemplateDefaults;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>

---


### ConnectTaskTemplateFieldsIdOutputReference <a name="ConnectTaskTemplateFieldsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

new connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTaskTemplateFieldsId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a>

---


### ConnectTaskTemplateFieldsList <a name="ConnectTaskTemplateFieldsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

new connectTaskTemplate.ConnectTaskTemplateFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.get"></a>

```typescript
public get(index: number): ConnectTaskTemplateFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTaskTemplateFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>[]

---


### ConnectTaskTemplateFieldsOutputReference <a name="ConnectTaskTemplateFieldsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

new connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.putId">putId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetSingleSelectOptions">resetSingleSelectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putId` <a name="putId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.putId"></a>

```typescript
public putId(value: ConnectTaskTemplateFieldsId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.putId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSingleSelectOptions` <a name="resetSingleSelectOptions" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetSingleSelectOptions"></a>

```typescript
public resetSingleSelectOptions(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference">ConnectTaskTemplateFieldsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.idInput">idInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.singleSelectOptionsInput">singleSelectOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.singleSelectOptions">singleSelectOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.id"></a>

```typescript
public readonly id: ConnectTaskTemplateFieldsIdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference">ConnectTaskTemplateFieldsIdOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: IResolvable | ConnectTaskTemplateFieldsId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a>

---

##### `singleSelectOptionsInput`<sup>Optional</sup> <a name="singleSelectOptionsInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.singleSelectOptionsInput"></a>

```typescript
public readonly singleSelectOptionsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `singleSelectOptions`<sup>Required</sup> <a name="singleSelectOptions" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.singleSelectOptions"></a>

```typescript
public readonly singleSelectOptions: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTaskTemplateFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>

---


### ConnectTaskTemplateTagsList <a name="ConnectTaskTemplateTagsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

new connectTaskTemplate.ConnectTaskTemplateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.get"></a>

```typescript
public get(index: number): ConnectTaskTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTaskTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>[]

---


### ConnectTaskTemplateTagsOutputReference <a name="ConnectTaskTemplateTagsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer"></a>

```typescript
import { connectTaskTemplate } from '@cdktn/provider-awscc'

new connectTaskTemplate.ConnectTaskTemplateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTaskTemplateTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>

---



