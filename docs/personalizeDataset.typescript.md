# `personalizeDataset` Submodule <a name="`personalizeDataset` Submodule" id="@cdktn/provider-awscc.personalizeDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersonalizeDataset <a name="PersonalizeDataset" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset awscc_personalize_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer"></a>

```typescript
import { personalizeDataset } from '@cdktn/provider-awscc'

new personalizeDataset.PersonalizeDataset(scope: Construct, id: string, config: PersonalizeDatasetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig">PersonalizeDatasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig">PersonalizeDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putDatasetImportJob">putDatasetImportJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetDatasetImportJob">resetDatasetImportJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatasetImportJob` <a name="putDatasetImportJob" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putDatasetImportJob"></a>

```typescript
public putDatasetImportJob(value: PersonalizeDatasetDatasetImportJob): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putDatasetImportJob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putTags"></a>

```typescript
public putTags(value: IResolvable | PersonalizeDatasetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>[]

---

##### `resetDatasetImportJob` <a name="resetDatasetImportJob" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetDatasetImportJob"></a>

```typescript
public resetDatasetImportJob(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PersonalizeDataset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isConstruct"></a>

```typescript
import { personalizeDataset } from '@cdktn/provider-awscc'

personalizeDataset.PersonalizeDataset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformElement"></a>

```typescript
import { personalizeDataset } from '@cdktn/provider-awscc'

personalizeDataset.PersonalizeDataset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformResource"></a>

```typescript
import { personalizeDataset } from '@cdktn/provider-awscc'

personalizeDataset.PersonalizeDataset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport"></a>

```typescript
import { personalizeDataset } from '@cdktn/provider-awscc'

personalizeDataset.PersonalizeDataset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PersonalizeDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PersonalizeDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PersonalizeDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PersonalizeDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetArn">datasetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetImportJob">datasetImportJob</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference">PersonalizeDatasetDatasetImportJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList">PersonalizeDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetGroupArnInput">datasetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetImportJobInput">datasetImportJobInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetTypeInput">datasetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.schemaArnInput">schemaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetGroupArn">datasetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetType">datasetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.schemaArn">schemaArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `datasetArn`<sup>Required</sup> <a name="datasetArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetArn"></a>

```typescript
public readonly datasetArn: string;
```

- *Type:* string

---

##### `datasetImportJob`<sup>Required</sup> <a name="datasetImportJob" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetImportJob"></a>

```typescript
public readonly datasetImportJob: PersonalizeDatasetDatasetImportJobOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference">PersonalizeDatasetDatasetImportJobOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tags"></a>

```typescript
public readonly tags: PersonalizeDatasetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList">PersonalizeDatasetTagsList</a>

---

##### `datasetGroupArnInput`<sup>Optional</sup> <a name="datasetGroupArnInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetGroupArnInput"></a>

```typescript
public readonly datasetGroupArnInput: string;
```

- *Type:* string

---

##### `datasetImportJobInput`<sup>Optional</sup> <a name="datasetImportJobInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetImportJobInput"></a>

```typescript
public readonly datasetImportJobInput: IResolvable | PersonalizeDatasetDatasetImportJob;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a>

---

##### `datasetTypeInput`<sup>Optional</sup> <a name="datasetTypeInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetTypeInput"></a>

```typescript
public readonly datasetTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaArnInput`<sup>Optional</sup> <a name="schemaArnInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.schemaArnInput"></a>

```typescript
public readonly schemaArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | PersonalizeDatasetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>[]

---

##### `datasetGroupArn`<sup>Required</sup> <a name="datasetGroupArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetGroupArn"></a>

```typescript
public readonly datasetGroupArn: string;
```

- *Type:* string

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetType"></a>

```typescript
public readonly datasetType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schemaArn`<sup>Required</sup> <a name="schemaArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.schemaArn"></a>

```typescript
public readonly schemaArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PersonalizeDatasetConfig <a name="PersonalizeDatasetConfig" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.Initializer"></a>

```typescript
import { personalizeDataset } from '@cdktn/provider-awscc'

const personalizeDatasetConfig: personalizeDataset.PersonalizeDatasetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetGroupArn">datasetGroupArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the dataset group to add the dataset to. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetType">datasetType</a></code> | <code>string</code> | The type of dataset. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.name">name</a></code> | <code>string</code> | The name for the dataset. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.schemaArn">schemaArn</a></code> | <code>string</code> | The ARN of the schema to associate with the dataset. The schema defines the dataset fields. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetImportJob">datasetImportJob</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a></code> | Initial DatasetImportJob for the created dataset. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>[]</code> | The tags used to organize, track, or control access for this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `datasetGroupArn`<sup>Required</sup> <a name="datasetGroupArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetGroupArn"></a>

```typescript
public readonly datasetGroupArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the dataset group to add the dataset to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#dataset_group_arn PersonalizeDataset#dataset_group_arn}

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetType"></a>

```typescript
public readonly datasetType: string;
```

- *Type:* string

The type of dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#dataset_type PersonalizeDataset#dataset_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#name PersonalizeDataset#name}

---

##### `schemaArn`<sup>Required</sup> <a name="schemaArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.schemaArn"></a>

```typescript
public readonly schemaArn: string;
```

- *Type:* string

The ARN of the schema to associate with the dataset. The schema defines the dataset fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#schema_arn PersonalizeDataset#schema_arn}

---

##### `datasetImportJob`<sup>Optional</sup> <a name="datasetImportJob" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetImportJob"></a>

```typescript
public readonly datasetImportJob: PersonalizeDatasetDatasetImportJob;
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a>

Initial DatasetImportJob for the created dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#dataset_import_job PersonalizeDataset#dataset_import_job}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | PersonalizeDatasetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>[]

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#tags PersonalizeDataset#tags}

---

### PersonalizeDatasetDatasetImportJob <a name="PersonalizeDatasetDatasetImportJob" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.Initializer"></a>

```typescript
import { personalizeDataset } from '@cdktn/provider-awscc'

const personalizeDatasetDatasetImportJob: personalizeDataset.PersonalizeDatasetDatasetImportJob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.datasetArn">datasetArn</a></code> | <code>string</code> | The ARN of the dataset that receives the imported data. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.datasetImportJobArn">datasetImportJobArn</a></code> | <code>string</code> | The ARN of the dataset import job. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.dataSource">dataSource</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a></code> | The Amazon S3 bucket that contains the training data to import. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.jobName">jobName</a></code> | <code>string</code> | The name for the dataset import job. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the IAM role that has permissions to read from the Amazon S3 data source. |

---

##### `datasetArn`<sup>Optional</sup> <a name="datasetArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.datasetArn"></a>

```typescript
public readonly datasetArn: string;
```

- *Type:* string

The ARN of the dataset that receives the imported data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#dataset_arn PersonalizeDataset#dataset_arn}

---

##### `datasetImportJobArn`<sup>Optional</sup> <a name="datasetImportJobArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.datasetImportJobArn"></a>

```typescript
public readonly datasetImportJobArn: string;
```

- *Type:* string

The ARN of the dataset import job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#dataset_import_job_arn PersonalizeDataset#dataset_import_job_arn}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.dataSource"></a>

```typescript
public readonly dataSource: PersonalizeDatasetDatasetImportJobDataSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a>

The Amazon S3 bucket that contains the training data to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#data_source PersonalizeDataset#data_source}

---

##### `jobName`<sup>Optional</sup> <a name="jobName" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

The name for the dataset import job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#job_name PersonalizeDataset#job_name}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the IAM role that has permissions to read from the Amazon S3 data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#role_arn PersonalizeDataset#role_arn}

---

### PersonalizeDatasetDatasetImportJobDataSource <a name="PersonalizeDatasetDatasetImportJobDataSource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource.Initializer"></a>

```typescript
import { personalizeDataset } from '@cdktn/provider-awscc'

const personalizeDatasetDatasetImportJobDataSource: personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource.property.dataLocation">dataLocation</a></code> | <code>string</code> | The path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored. |

---

##### `dataLocation`<sup>Optional</sup> <a name="dataLocation" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource.property.dataLocation"></a>

```typescript
public readonly dataLocation: string;
```

- *Type:* string

The path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#data_location PersonalizeDataset#data_location}

---

### PersonalizeDatasetTags <a name="PersonalizeDatasetTags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.Initializer"></a>

```typescript
import { personalizeDataset } from '@cdktn/provider-awscc'

const personalizeDatasetTags: personalizeDataset.PersonalizeDatasetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#key PersonalizeDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#value PersonalizeDataset#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#key PersonalizeDataset#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/personalize_dataset#value PersonalizeDataset#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PersonalizeDatasetDatasetImportJobDataSourceOutputReference <a name="PersonalizeDatasetDatasetImportJobDataSourceOutputReference" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer"></a>

```typescript
import { personalizeDataset } from '@cdktn/provider-awscc'

new personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resetDataLocation">resetDataLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataLocation` <a name="resetDataLocation" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resetDataLocation"></a>

```typescript
public resetDataLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.dataLocationInput">dataLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.dataLocation">dataLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataLocationInput`<sup>Optional</sup> <a name="dataLocationInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.dataLocationInput"></a>

```typescript
public readonly dataLocationInput: string;
```

- *Type:* string

---

##### `dataLocation`<sup>Required</sup> <a name="dataLocation" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.dataLocation"></a>

```typescript
public readonly dataLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersonalizeDatasetDatasetImportJobDataSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a>

---


### PersonalizeDatasetDatasetImportJobOutputReference <a name="PersonalizeDatasetDatasetImportJobOutputReference" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer"></a>

```typescript
import { personalizeDataset } from '@cdktn/provider-awscc'

new personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.putDataSource">putDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDatasetArn">resetDatasetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDatasetImportJobArn">resetDatasetImportJobArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDataSource">resetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetJobName">resetJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataSource` <a name="putDataSource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.putDataSource"></a>

```typescript
public putDataSource(value: PersonalizeDatasetDatasetImportJobDataSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.putDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a>

---

##### `resetDatasetArn` <a name="resetDatasetArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDatasetArn"></a>

```typescript
public resetDatasetArn(): void
```

##### `resetDatasetImportJobArn` <a name="resetDatasetImportJobArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDatasetImportJobArn"></a>

```typescript
public resetDatasetImportJobArn(): void
```

##### `resetDataSource` <a name="resetDataSource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDataSource"></a>

```typescript
public resetDataSource(): void
```

##### `resetJobName` <a name="resetJobName" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetJobName"></a>

```typescript
public resetJobName(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.dataSource">dataSource</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference">PersonalizeDatasetDatasetImportJobDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetArnInput">datasetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetImportJobArnInput">datasetImportJobArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.jobNameInput">jobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetArn">datasetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetImportJobArn">datasetImportJobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.jobName">jobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.dataSource"></a>

```typescript
public readonly dataSource: PersonalizeDatasetDatasetImportJobDataSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference">PersonalizeDatasetDatasetImportJobDataSourceOutputReference</a>

---

##### `datasetArnInput`<sup>Optional</sup> <a name="datasetArnInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetArnInput"></a>

```typescript
public readonly datasetArnInput: string;
```

- *Type:* string

---

##### `datasetImportJobArnInput`<sup>Optional</sup> <a name="datasetImportJobArnInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetImportJobArnInput"></a>

```typescript
public readonly datasetImportJobArnInput: string;
```

- *Type:* string

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: IResolvable | PersonalizeDatasetDatasetImportJobDataSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a>

---

##### `jobNameInput`<sup>Optional</sup> <a name="jobNameInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.jobNameInput"></a>

```typescript
public readonly jobNameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `datasetArn`<sup>Required</sup> <a name="datasetArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetArn"></a>

```typescript
public readonly datasetArn: string;
```

- *Type:* string

---

##### `datasetImportJobArn`<sup>Required</sup> <a name="datasetImportJobArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetImportJobArn"></a>

```typescript
public readonly datasetImportJobArn: string;
```

- *Type:* string

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersonalizeDatasetDatasetImportJob;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a>

---


### PersonalizeDatasetTagsList <a name="PersonalizeDatasetTagsList" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer"></a>

```typescript
import { personalizeDataset } from '@cdktn/provider-awscc'

new personalizeDataset.PersonalizeDatasetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.get"></a>

```typescript
public get(index: number): PersonalizeDatasetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersonalizeDatasetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>[]

---


### PersonalizeDatasetTagsOutputReference <a name="PersonalizeDatasetTagsOutputReference" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer"></a>

```typescript
import { personalizeDataset } from '@cdktn/provider-awscc'

new personalizeDataset.PersonalizeDatasetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersonalizeDatasetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags">PersonalizeDatasetTags</a>

---



