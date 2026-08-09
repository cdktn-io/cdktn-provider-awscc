# `sagemakerModelPackageGroup` Submodule <a name="`sagemakerModelPackageGroup` Submodule" id="@cdktn/provider-awscc.sagemakerModelPackageGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerModelPackageGroup <a name="SagemakerModelPackageGroup" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_package_group awscc_sagemaker_model_package_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.Initializer"></a>

```typescript
import { sagemakerModelPackageGroup } from '@cdktn/provider-awscc'

new sagemakerModelPackageGroup.SagemakerModelPackageGroup(scope: Construct, id: string, config: SagemakerModelPackageGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig">SagemakerModelPackageGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig">SagemakerModelPackageGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.resetModelPackageGroupDescription">resetModelPackageGroupDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.resetModelPackageGroupPolicy">resetModelPackageGroupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | SagemakerModelPackageGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTags">SagemakerModelPackageGroupTags</a>[]

---

##### `resetModelPackageGroupDescription` <a name="resetModelPackageGroupDescription" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.resetModelPackageGroupDescription"></a>

```typescript
public resetModelPackageGroupDescription(): void
```

##### `resetModelPackageGroupPolicy` <a name="resetModelPackageGroupPolicy" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.resetModelPackageGroupPolicy"></a>

```typescript
public resetModelPackageGroupPolicy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerModelPackageGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.isConstruct"></a>

```typescript
import { sagemakerModelPackageGroup } from '@cdktn/provider-awscc'

sagemakerModelPackageGroup.SagemakerModelPackageGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.isTerraformElement"></a>

```typescript
import { sagemakerModelPackageGroup } from '@cdktn/provider-awscc'

sagemakerModelPackageGroup.SagemakerModelPackageGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.isTerraformResource"></a>

```typescript
import { sagemakerModelPackageGroup } from '@cdktn/provider-awscc'

sagemakerModelPackageGroup.SagemakerModelPackageGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.generateConfigForImport"></a>

```typescript
import { sagemakerModelPackageGroup } from '@cdktn/provider-awscc'

sagemakerModelPackageGroup.SagemakerModelPackageGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerModelPackageGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerModelPackageGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerModelPackageGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_package_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerModelPackageGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.modelPackageGroupArn">modelPackageGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.modelPackageGroupStatus">modelPackageGroupStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList">SagemakerModelPackageGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.modelPackageGroupDescriptionInput">modelPackageGroupDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.modelPackageGroupNameInput">modelPackageGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.modelPackageGroupPolicyInput">modelPackageGroupPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTags">SagemakerModelPackageGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.modelPackageGroupDescription">modelPackageGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.modelPackageGroupName">modelPackageGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.modelPackageGroupPolicy">modelPackageGroupPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modelPackageGroupArn`<sup>Required</sup> <a name="modelPackageGroupArn" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.modelPackageGroupArn"></a>

```typescript
public readonly modelPackageGroupArn: string;
```

- *Type:* string

---

##### `modelPackageGroupStatus`<sup>Required</sup> <a name="modelPackageGroupStatus" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.modelPackageGroupStatus"></a>

```typescript
public readonly modelPackageGroupStatus: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.tags"></a>

```typescript
public readonly tags: SagemakerModelPackageGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList">SagemakerModelPackageGroupTagsList</a>

---

##### `modelPackageGroupDescriptionInput`<sup>Optional</sup> <a name="modelPackageGroupDescriptionInput" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.modelPackageGroupDescriptionInput"></a>

```typescript
public readonly modelPackageGroupDescriptionInput: string;
```

- *Type:* string

---

##### `modelPackageGroupNameInput`<sup>Optional</sup> <a name="modelPackageGroupNameInput" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.modelPackageGroupNameInput"></a>

```typescript
public readonly modelPackageGroupNameInput: string;
```

- *Type:* string

---

##### `modelPackageGroupPolicyInput`<sup>Optional</sup> <a name="modelPackageGroupPolicyInput" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.modelPackageGroupPolicyInput"></a>

```typescript
public readonly modelPackageGroupPolicyInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SagemakerModelPackageGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTags">SagemakerModelPackageGroupTags</a>[]

---

##### `modelPackageGroupDescription`<sup>Required</sup> <a name="modelPackageGroupDescription" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.modelPackageGroupDescription"></a>

```typescript
public readonly modelPackageGroupDescription: string;
```

- *Type:* string

---

##### `modelPackageGroupName`<sup>Required</sup> <a name="modelPackageGroupName" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.modelPackageGroupName"></a>

```typescript
public readonly modelPackageGroupName: string;
```

- *Type:* string

---

##### `modelPackageGroupPolicy`<sup>Required</sup> <a name="modelPackageGroupPolicy" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.modelPackageGroupPolicy"></a>

```typescript
public readonly modelPackageGroupPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerModelPackageGroupConfig <a name="SagemakerModelPackageGroupConfig" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.Initializer"></a>

```typescript
import { sagemakerModelPackageGroup } from '@cdktn/provider-awscc'

const sagemakerModelPackageGroupConfig: sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.modelPackageGroupName">modelPackageGroupName</a></code> | <code>string</code> | The name of the model package group. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.modelPackageGroupDescription">modelPackageGroupDescription</a></code> | <code>string</code> | The description of the model package group. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.modelPackageGroupPolicy">modelPackageGroupPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_package_group#model_package_group_policy SagemakerModelPackageGroup#model_package_group_policy}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTags">SagemakerModelPackageGroupTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `modelPackageGroupName`<sup>Required</sup> <a name="modelPackageGroupName" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.modelPackageGroupName"></a>

```typescript
public readonly modelPackageGroupName: string;
```

- *Type:* string

The name of the model package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_package_group#model_package_group_name SagemakerModelPackageGroup#model_package_group_name}

---

##### `modelPackageGroupDescription`<sup>Optional</sup> <a name="modelPackageGroupDescription" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.modelPackageGroupDescription"></a>

```typescript
public readonly modelPackageGroupDescription: string;
```

- *Type:* string

The description of the model package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_package_group#model_package_group_description SagemakerModelPackageGroup#model_package_group_description}

---

##### `modelPackageGroupPolicy`<sup>Optional</sup> <a name="modelPackageGroupPolicy" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.modelPackageGroupPolicy"></a>

```typescript
public readonly modelPackageGroupPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_package_group#model_package_group_policy SagemakerModelPackageGroup#model_package_group_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SagemakerModelPackageGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTags">SagemakerModelPackageGroupTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_package_group#tags SagemakerModelPackageGroup#tags}

---

### SagemakerModelPackageGroupTags <a name="SagemakerModelPackageGroupTags" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTags.Initializer"></a>

```typescript
import { sagemakerModelPackageGroup } from '@cdktn/provider-awscc'

const sagemakerModelPackageGroupTags: sagemakerModelPackageGroup.SagemakerModelPackageGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_package_group#key SagemakerModelPackageGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_model_package_group#value SagemakerModelPackageGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerModelPackageGroupTagsList <a name="SagemakerModelPackageGroupTagsList" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.Initializer"></a>

```typescript
import { sagemakerModelPackageGroup } from '@cdktn/provider-awscc'

new sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.get"></a>

```typescript
public get(index: number): SagemakerModelPackageGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTags">SagemakerModelPackageGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerModelPackageGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTags">SagemakerModelPackageGroupTags</a>[]

---


### SagemakerModelPackageGroupTagsOutputReference <a name="SagemakerModelPackageGroupTagsOutputReference" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.Initializer"></a>

```typescript
import { sagemakerModelPackageGroup } from '@cdktn/provider-awscc'

new sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTags">SagemakerModelPackageGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerModelPackageGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelPackageGroup.SagemakerModelPackageGroupTags">SagemakerModelPackageGroupTags</a>

---



