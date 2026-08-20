# `transferAgreement` Submodule <a name="`transferAgreement` Submodule" id="@cdktn/provider-awscc.transferAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferAgreement <a name="TransferAgreement" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement awscc_transfer_agreement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer"></a>

```typescript
import { transferAgreement } from '@cdktn/provider-awscc'

new transferAgreement.TransferAgreement(scope: Construct, id: string, config: TransferAgreementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig">TransferAgreementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig">TransferAgreementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.putCustomDirectories">putCustomDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetBaseDirectory">resetBaseDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetCustomDirectories">resetCustomDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetEnforceMessageSigning">resetEnforceMessageSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetPreserveFilename">resetPreserveFilename</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomDirectories` <a name="putCustomDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putCustomDirectories"></a>

```typescript
public putCustomDirectories(value: TransferAgreementCustomDirectories): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putCustomDirectories.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putTags"></a>

```typescript
public putTags(value: IResolvable | TransferAgreementTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>[]

---

##### `resetBaseDirectory` <a name="resetBaseDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetBaseDirectory"></a>

```typescript
public resetBaseDirectory(): void
```

##### `resetCustomDirectories` <a name="resetCustomDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetCustomDirectories"></a>

```typescript
public resetCustomDirectories(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnforceMessageSigning` <a name="resetEnforceMessageSigning" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetEnforceMessageSigning"></a>

```typescript
public resetEnforceMessageSigning(): void
```

##### `resetPreserveFilename` <a name="resetPreserveFilename" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetPreserveFilename"></a>

```typescript
public resetPreserveFilename(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TransferAgreement resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isConstruct"></a>

```typescript
import { transferAgreement } from '@cdktn/provider-awscc'

transferAgreement.TransferAgreement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformElement"></a>

```typescript
import { transferAgreement } from '@cdktn/provider-awscc'

transferAgreement.TransferAgreement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformResource"></a>

```typescript
import { transferAgreement } from '@cdktn/provider-awscc'

transferAgreement.TransferAgreement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport"></a>

```typescript
import { transferAgreement } from '@cdktn/provider-awscc'

transferAgreement.TransferAgreement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TransferAgreement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransferAgreement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransferAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TransferAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.agreementId">agreementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectories">customDirectories</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference">TransferAgreementCustomDirectoriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList">TransferAgreementTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRoleInput">accessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectoryInput">baseDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectoriesInput">customDirectoriesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigningInput">enforceMessageSigningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileIdInput">localProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileIdInput">partnerProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilenameInput">preserveFilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverIdInput">serverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRole">accessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectory">baseDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigning">enforceMessageSigning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileId">localProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileId">partnerProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilename">preserveFilename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agreementId`<sup>Required</sup> <a name="agreementId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.agreementId"></a>

```typescript
public readonly agreementId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `customDirectories`<sup>Required</sup> <a name="customDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectories"></a>

```typescript
public readonly customDirectories: TransferAgreementCustomDirectoriesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference">TransferAgreementCustomDirectoriesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tags"></a>

```typescript
public readonly tags: TransferAgreementTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList">TransferAgreementTagsList</a>

---

##### `accessRoleInput`<sup>Optional</sup> <a name="accessRoleInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRoleInput"></a>

```typescript
public readonly accessRoleInput: string;
```

- *Type:* string

---

##### `baseDirectoryInput`<sup>Optional</sup> <a name="baseDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectoryInput"></a>

```typescript
public readonly baseDirectoryInput: string;
```

- *Type:* string

---

##### `customDirectoriesInput`<sup>Optional</sup> <a name="customDirectoriesInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectoriesInput"></a>

```typescript
public readonly customDirectoriesInput: IResolvable | TransferAgreementCustomDirectories;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enforceMessageSigningInput`<sup>Optional</sup> <a name="enforceMessageSigningInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigningInput"></a>

```typescript
public readonly enforceMessageSigningInput: string;
```

- *Type:* string

---

##### `localProfileIdInput`<sup>Optional</sup> <a name="localProfileIdInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileIdInput"></a>

```typescript
public readonly localProfileIdInput: string;
```

- *Type:* string

---

##### `partnerProfileIdInput`<sup>Optional</sup> <a name="partnerProfileIdInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileIdInput"></a>

```typescript
public readonly partnerProfileIdInput: string;
```

- *Type:* string

---

##### `preserveFilenameInput`<sup>Optional</sup> <a name="preserveFilenameInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilenameInput"></a>

```typescript
public readonly preserveFilenameInput: string;
```

- *Type:* string

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverIdInput"></a>

```typescript
public readonly serverIdInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | TransferAgreementTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>[]

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRole"></a>

```typescript
public readonly accessRole: string;
```

- *Type:* string

---

##### `baseDirectory`<sup>Required</sup> <a name="baseDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectory"></a>

```typescript
public readonly baseDirectory: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enforceMessageSigning`<sup>Required</sup> <a name="enforceMessageSigning" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigning"></a>

```typescript
public readonly enforceMessageSigning: string;
```

- *Type:* string

---

##### `localProfileId`<sup>Required</sup> <a name="localProfileId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileId"></a>

```typescript
public readonly localProfileId: string;
```

- *Type:* string

---

##### `partnerProfileId`<sup>Required</sup> <a name="partnerProfileId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileId"></a>

```typescript
public readonly partnerProfileId: string;
```

- *Type:* string

---

##### `preserveFilename`<sup>Required</sup> <a name="preserveFilename" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilename"></a>

```typescript
public readonly preserveFilename: string;
```

- *Type:* string

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferAgreementConfig <a name="TransferAgreementConfig" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.Initializer"></a>

```typescript
import { transferAgreement } from '@cdktn/provider-awscc'

const transferAgreementConfig: transferAgreement.TransferAgreementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.accessRole">accessRole</a></code> | <code>string</code> | Specifies the access role for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.localProfileId">localProfileId</a></code> | <code>string</code> | A unique identifier for the local profile. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.partnerProfileId">partnerProfileId</a></code> | <code>string</code> | A unique identifier for the partner profile. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.serverId">serverId</a></code> | <code>string</code> | A unique identifier for the server. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.baseDirectory">baseDirectory</a></code> | <code>string</code> | Specifies the base directory for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.customDirectories">customDirectories</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a></code> | Specifies a separate directory for each type of file to store for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.description">description</a></code> | <code>string</code> | A textual description for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.enforceMessageSigning">enforceMessageSigning</a></code> | <code>string</code> | Specifies whether to enforce an AS2 message is signed for this agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.preserveFilename">preserveFilename</a></code> | <code>string</code> | Specifies whether to preserve the filename received for this agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.status">status</a></code> | <code>string</code> | Specifies the status of the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>[]</code> | Key-value pairs that can be used to group and search for agreements. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.accessRole"></a>

```typescript
public readonly accessRole: string;
```

- *Type:* string

Specifies the access role for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement#access_role TransferAgreement#access_role}

---

##### `localProfileId`<sup>Required</sup> <a name="localProfileId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.localProfileId"></a>

```typescript
public readonly localProfileId: string;
```

- *Type:* string

A unique identifier for the local profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement#local_profile_id TransferAgreement#local_profile_id}

---

##### `partnerProfileId`<sup>Required</sup> <a name="partnerProfileId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.partnerProfileId"></a>

```typescript
public readonly partnerProfileId: string;
```

- *Type:* string

A unique identifier for the partner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement#partner_profile_id TransferAgreement#partner_profile_id}

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

A unique identifier for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement#server_id TransferAgreement#server_id}

---

##### `baseDirectory`<sup>Optional</sup> <a name="baseDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.baseDirectory"></a>

```typescript
public readonly baseDirectory: string;
```

- *Type:* string

Specifies the base directory for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement#base_directory TransferAgreement#base_directory}

---

##### `customDirectories`<sup>Optional</sup> <a name="customDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.customDirectories"></a>

```typescript
public readonly customDirectories: TransferAgreementCustomDirectories;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a>

Specifies a separate directory for each type of file to store for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement#custom_directories TransferAgreement#custom_directories}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A textual description for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement#description TransferAgreement#description}

---

##### `enforceMessageSigning`<sup>Optional</sup> <a name="enforceMessageSigning" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.enforceMessageSigning"></a>

```typescript
public readonly enforceMessageSigning: string;
```

- *Type:* string

Specifies whether to enforce an AS2 message is signed for this agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement#enforce_message_signing TransferAgreement#enforce_message_signing}

---

##### `preserveFilename`<sup>Optional</sup> <a name="preserveFilename" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.preserveFilename"></a>

```typescript
public readonly preserveFilename: string;
```

- *Type:* string

Specifies whether to preserve the filename received for this agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement#preserve_filename TransferAgreement#preserve_filename}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Specifies the status of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement#status TransferAgreement#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | TransferAgreementTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>[]

Key-value pairs that can be used to group and search for agreements.

Tags are metadata attached to agreements for any purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement#tags TransferAgreement#tags}

---

### TransferAgreementCustomDirectories <a name="TransferAgreementCustomDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.Initializer"></a>

```typescript
import { transferAgreement } from '@cdktn/provider-awscc'

const transferAgreementCustomDirectories: transferAgreement.TransferAgreementCustomDirectories = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.failedFilesDirectory">failedFilesDirectory</a></code> | <code>string</code> | Specifies a location to store the failed files for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.mdnFilesDirectory">mdnFilesDirectory</a></code> | <code>string</code> | Specifies a location to store the MDN file for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.payloadFilesDirectory">payloadFilesDirectory</a></code> | <code>string</code> | Specifies a location to store the payload file for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.statusFilesDirectory">statusFilesDirectory</a></code> | <code>string</code> | Specifies a location to store the status file for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.temporaryFilesDirectory">temporaryFilesDirectory</a></code> | <code>string</code> | Specifies a location to store the temporary processing file for an AS2 message. |

---

##### `failedFilesDirectory`<sup>Optional</sup> <a name="failedFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.failedFilesDirectory"></a>

```typescript
public readonly failedFilesDirectory: string;
```

- *Type:* string

Specifies a location to store the failed files for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement#failed_files_directory TransferAgreement#failed_files_directory}

---

##### `mdnFilesDirectory`<sup>Optional</sup> <a name="mdnFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.mdnFilesDirectory"></a>

```typescript
public readonly mdnFilesDirectory: string;
```

- *Type:* string

Specifies a location to store the MDN file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement#mdn_files_directory TransferAgreement#mdn_files_directory}

---

##### `payloadFilesDirectory`<sup>Optional</sup> <a name="payloadFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.payloadFilesDirectory"></a>

```typescript
public readonly payloadFilesDirectory: string;
```

- *Type:* string

Specifies a location to store the payload file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement#payload_files_directory TransferAgreement#payload_files_directory}

---

##### `statusFilesDirectory`<sup>Optional</sup> <a name="statusFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.statusFilesDirectory"></a>

```typescript
public readonly statusFilesDirectory: string;
```

- *Type:* string

Specifies a location to store the status file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement#status_files_directory TransferAgreement#status_files_directory}

---

##### `temporaryFilesDirectory`<sup>Optional</sup> <a name="temporaryFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.temporaryFilesDirectory"></a>

```typescript
public readonly temporaryFilesDirectory: string;
```

- *Type:* string

Specifies a location to store the temporary processing file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement#temporary_files_directory TransferAgreement#temporary_files_directory}

---

### TransferAgreementTags <a name="TransferAgreementTags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.Initializer"></a>

```typescript
import { transferAgreement } from '@cdktn/provider-awscc'

const transferAgreementTags: transferAgreement.TransferAgreementTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.key">key</a></code> | <code>string</code> | The name assigned to the tag that you create. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.value">value</a></code> | <code>string</code> | Contains one or more values that you assigned to the key name you create. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The name assigned to the tag that you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement#key TransferAgreement#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Contains one or more values that you assigned to the key name you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/transfer_agreement#value TransferAgreement#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TransferAgreementCustomDirectoriesOutputReference <a name="TransferAgreementCustomDirectoriesOutputReference" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer"></a>

```typescript
import { transferAgreement } from '@cdktn/provider-awscc'

new transferAgreement.TransferAgreementCustomDirectoriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetFailedFilesDirectory">resetFailedFilesDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetMdnFilesDirectory">resetMdnFilesDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetPayloadFilesDirectory">resetPayloadFilesDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetStatusFilesDirectory">resetStatusFilesDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetTemporaryFilesDirectory">resetTemporaryFilesDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailedFilesDirectory` <a name="resetFailedFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetFailedFilesDirectory"></a>

```typescript
public resetFailedFilesDirectory(): void
```

##### `resetMdnFilesDirectory` <a name="resetMdnFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetMdnFilesDirectory"></a>

```typescript
public resetMdnFilesDirectory(): void
```

##### `resetPayloadFilesDirectory` <a name="resetPayloadFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetPayloadFilesDirectory"></a>

```typescript
public resetPayloadFilesDirectory(): void
```

##### `resetStatusFilesDirectory` <a name="resetStatusFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetStatusFilesDirectory"></a>

```typescript
public resetStatusFilesDirectory(): void
```

##### `resetTemporaryFilesDirectory` <a name="resetTemporaryFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetTemporaryFilesDirectory"></a>

```typescript
public resetTemporaryFilesDirectory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectoryInput">failedFilesDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectoryInput">mdnFilesDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectoryInput">payloadFilesDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectoryInput">statusFilesDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectoryInput">temporaryFilesDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectory">failedFilesDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectory">mdnFilesDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectory">payloadFilesDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectory">statusFilesDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectory">temporaryFilesDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failedFilesDirectoryInput`<sup>Optional</sup> <a name="failedFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectoryInput"></a>

```typescript
public readonly failedFilesDirectoryInput: string;
```

- *Type:* string

---

##### `mdnFilesDirectoryInput`<sup>Optional</sup> <a name="mdnFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectoryInput"></a>

```typescript
public readonly mdnFilesDirectoryInput: string;
```

- *Type:* string

---

##### `payloadFilesDirectoryInput`<sup>Optional</sup> <a name="payloadFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectoryInput"></a>

```typescript
public readonly payloadFilesDirectoryInput: string;
```

- *Type:* string

---

##### `statusFilesDirectoryInput`<sup>Optional</sup> <a name="statusFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectoryInput"></a>

```typescript
public readonly statusFilesDirectoryInput: string;
```

- *Type:* string

---

##### `temporaryFilesDirectoryInput`<sup>Optional</sup> <a name="temporaryFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectoryInput"></a>

```typescript
public readonly temporaryFilesDirectoryInput: string;
```

- *Type:* string

---

##### `failedFilesDirectory`<sup>Required</sup> <a name="failedFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectory"></a>

```typescript
public readonly failedFilesDirectory: string;
```

- *Type:* string

---

##### `mdnFilesDirectory`<sup>Required</sup> <a name="mdnFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectory"></a>

```typescript
public readonly mdnFilesDirectory: string;
```

- *Type:* string

---

##### `payloadFilesDirectory`<sup>Required</sup> <a name="payloadFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectory"></a>

```typescript
public readonly payloadFilesDirectory: string;
```

- *Type:* string

---

##### `statusFilesDirectory`<sup>Required</sup> <a name="statusFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectory"></a>

```typescript
public readonly statusFilesDirectory: string;
```

- *Type:* string

---

##### `temporaryFilesDirectory`<sup>Required</sup> <a name="temporaryFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectory"></a>

```typescript
public readonly temporaryFilesDirectory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferAgreementCustomDirectories;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a>

---


### TransferAgreementTagsList <a name="TransferAgreementTagsList" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer"></a>

```typescript
import { transferAgreement } from '@cdktn/provider-awscc'

new transferAgreement.TransferAgreementTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.get"></a>

```typescript
public get(index: number): TransferAgreementTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferAgreementTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>[]

---


### TransferAgreementTagsOutputReference <a name="TransferAgreementTagsOutputReference" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer"></a>

```typescript
import { transferAgreement } from '@cdktn/provider-awscc'

new transferAgreement.TransferAgreementTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferAgreementTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>

---



