# `cloudformationPublicTypeVersion` Submodule <a name="`cloudformationPublicTypeVersion` Submodule" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationPublicTypeVersion <a name="CloudformationPublicTypeVersion" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_public_type_version awscc_cloudformation_public_type_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer"></a>

```typescript
import { cloudformationPublicTypeVersion } from '@cdktn/provider-awscc'

new cloudformationPublicTypeVersion.CloudformationPublicTypeVersion(scope: Construct, id: string, config?: CloudformationPublicTypeVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig">CloudformationPublicTypeVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig">CloudformationPublicTypeVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetLogDeliveryBucket">resetLogDeliveryBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetPublicVersionNumber">resetPublicVersionNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetTypeName">resetTypeName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetLogDeliveryBucket` <a name="resetLogDeliveryBucket" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetLogDeliveryBucket"></a>

```typescript
public resetLogDeliveryBucket(): void
```

##### `resetPublicVersionNumber` <a name="resetPublicVersionNumber" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetPublicVersionNumber"></a>

```typescript
public resetPublicVersionNumber(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetType"></a>

```typescript
public resetType(): void
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetTypeName"></a>

```typescript
public resetTypeName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationPublicTypeVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isConstruct"></a>

```typescript
import { cloudformationPublicTypeVersion } from '@cdktn/provider-awscc'

cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformElement"></a>

```typescript
import { cloudformationPublicTypeVersion } from '@cdktn/provider-awscc'

cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformResource"></a>

```typescript
import { cloudformationPublicTypeVersion } from '@cdktn/provider-awscc'

cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport"></a>

```typescript
import { cloudformationPublicTypeVersion } from '@cdktn/provider-awscc'

cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudformationPublicTypeVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudformationPublicTypeVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudformationPublicTypeVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_public_type_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationPublicTypeVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicTypeArn">publicTypeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publisherId">publisherId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeVersionArn">typeVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.logDeliveryBucketInput">logDeliveryBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicVersionNumberInput">publicVersionNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeNameInput">typeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.logDeliveryBucket">logDeliveryBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicVersionNumber">publicVersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `publicTypeArn`<sup>Required</sup> <a name="publicTypeArn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicTypeArn"></a>

```typescript
public readonly publicTypeArn: string;
```

- *Type:* string

---

##### `publisherId`<sup>Required</sup> <a name="publisherId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publisherId"></a>

```typescript
public readonly publisherId: string;
```

- *Type:* string

---

##### `typeVersionArn`<sup>Required</sup> <a name="typeVersionArn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeVersionArn"></a>

```typescript
public readonly typeVersionArn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `logDeliveryBucketInput`<sup>Optional</sup> <a name="logDeliveryBucketInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.logDeliveryBucketInput"></a>

```typescript
public readonly logDeliveryBucketInput: string;
```

- *Type:* string

---

##### `publicVersionNumberInput`<sup>Optional</sup> <a name="publicVersionNumberInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicVersionNumberInput"></a>

```typescript
public readonly publicVersionNumberInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeNameInput"></a>

```typescript
public readonly typeNameInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `logDeliveryBucket`<sup>Required</sup> <a name="logDeliveryBucket" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.logDeliveryBucket"></a>

```typescript
public readonly logDeliveryBucket: string;
```

- *Type:* string

---

##### `publicVersionNumber`<sup>Required</sup> <a name="publicVersionNumber" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicVersionNumber"></a>

```typescript
public readonly publicVersionNumber: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationPublicTypeVersionConfig <a name="CloudformationPublicTypeVersionConfig" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.Initializer"></a>

```typescript
import { cloudformationPublicTypeVersion } from '@cdktn/provider-awscc'

const cloudformationPublicTypeVersionConfig: cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.arn">arn</a></code> | <code>string</code> | The Amazon Resource Number (ARN) of the extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.logDeliveryBucket">logDeliveryBucket</a></code> | <code>string</code> | A url to the S3 bucket where logs for the testType run will be available. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.publicVersionNumber">publicVersionNumber</a></code> | <code>string</code> | The version number of a public third-party extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.type">type</a></code> | <code>string</code> | The kind of extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.typeName">typeName</a></code> | <code>string</code> | The name of the type being registered. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The Amazon Resource Number (ARN) of the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_public_type_version#arn CloudformationPublicTypeVersion#arn}

---

##### `logDeliveryBucket`<sup>Optional</sup> <a name="logDeliveryBucket" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.logDeliveryBucket"></a>

```typescript
public readonly logDeliveryBucket: string;
```

- *Type:* string

A url to the S3 bucket where logs for the testType run will be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_public_type_version#log_delivery_bucket CloudformationPublicTypeVersion#log_delivery_bucket}

---

##### `publicVersionNumber`<sup>Optional</sup> <a name="publicVersionNumber" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.publicVersionNumber"></a>

```typescript
public readonly publicVersionNumber: string;
```

- *Type:* string

The version number of a public third-party extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_public_type_version#public_version_number CloudformationPublicTypeVersion#public_version_number}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The kind of extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_public_type_version#type CloudformationPublicTypeVersion#type}

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_public_type_version#type_name CloudformationPublicTypeVersion#type_name}

---



