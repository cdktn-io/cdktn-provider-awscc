# `sagemakerImageVersion` Submodule <a name="`sagemakerImageVersion` Submodule" id="@cdktn/provider-awscc.sagemakerImageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerImageVersion <a name="SagemakerImageVersion" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_image_version awscc_sagemaker_image_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer"></a>

```typescript
import { sagemakerImageVersion } from '@cdktn/provider-awscc'

new sagemakerImageVersion.SagemakerImageVersion(scope: Construct, id: string, config: SagemakerImageVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig">SagemakerImageVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig">SagemakerImageVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetAliases">resetAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetHorovod">resetHorovod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetJobType">resetJobType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetMlFramework">resetMlFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetProcessor">resetProcessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetProgrammingLang">resetProgrammingLang</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetReleaseNotes">resetReleaseNotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetVendorGuidance">resetVendorGuidance</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAliases` <a name="resetAliases" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetAliases"></a>

```typescript
public resetAliases(): void
```

##### `resetHorovod` <a name="resetHorovod" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetHorovod"></a>

```typescript
public resetHorovod(): void
```

##### `resetJobType` <a name="resetJobType" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetJobType"></a>

```typescript
public resetJobType(): void
```

##### `resetMlFramework` <a name="resetMlFramework" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetMlFramework"></a>

```typescript
public resetMlFramework(): void
```

##### `resetProcessor` <a name="resetProcessor" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetProcessor"></a>

```typescript
public resetProcessor(): void
```

##### `resetProgrammingLang` <a name="resetProgrammingLang" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetProgrammingLang"></a>

```typescript
public resetProgrammingLang(): void
```

##### `resetReleaseNotes` <a name="resetReleaseNotes" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetReleaseNotes"></a>

```typescript
public resetReleaseNotes(): void
```

##### `resetVendorGuidance` <a name="resetVendorGuidance" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetVendorGuidance"></a>

```typescript
public resetVendorGuidance(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerImageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isConstruct"></a>

```typescript
import { sagemakerImageVersion } from '@cdktn/provider-awscc'

sagemakerImageVersion.SagemakerImageVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isTerraformElement"></a>

```typescript
import { sagemakerImageVersion } from '@cdktn/provider-awscc'

sagemakerImageVersion.SagemakerImageVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isTerraformResource"></a>

```typescript
import { sagemakerImageVersion } from '@cdktn/provider-awscc'

sagemakerImageVersion.SagemakerImageVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport"></a>

```typescript
import { sagemakerImageVersion } from '@cdktn/provider-awscc'

sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerImageVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerImageVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerImageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_image_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerImageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.containerImage">containerImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageArn">imageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageVersionArn">imageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.aliasesInput">aliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.baseImageInput">baseImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.horovodInput">horovodInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.jobTypeInput">jobTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.mlFrameworkInput">mlFrameworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.processorInput">processorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.programmingLangInput">programmingLangInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotesInput">releaseNotesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidanceInput">vendorGuidanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.aliases">aliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.baseImage">baseImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.horovod">horovod</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.jobType">jobType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.mlFramework">mlFramework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.processor">processor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.programmingLang">programmingLang</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotes">releaseNotes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidance">vendorGuidance</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.containerImage"></a>

```typescript
public readonly containerImage: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageArn`<sup>Required</sup> <a name="imageArn" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageArn"></a>

```typescript
public readonly imageArn: string;
```

- *Type:* string

---

##### `imageVersionArn`<sup>Required</sup> <a name="imageVersionArn" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageVersionArn"></a>

```typescript
public readonly imageVersionArn: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `aliasesInput`<sup>Optional</sup> <a name="aliasesInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.aliasesInput"></a>

```typescript
public readonly aliasesInput: string[];
```

- *Type:* string[]

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `baseImageInput`<sup>Optional</sup> <a name="baseImageInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.baseImageInput"></a>

```typescript
public readonly baseImageInput: string;
```

- *Type:* string

---

##### `horovodInput`<sup>Optional</sup> <a name="horovodInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.horovodInput"></a>

```typescript
public readonly horovodInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `jobTypeInput`<sup>Optional</sup> <a name="jobTypeInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.jobTypeInput"></a>

```typescript
public readonly jobTypeInput: string;
```

- *Type:* string

---

##### `mlFrameworkInput`<sup>Optional</sup> <a name="mlFrameworkInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.mlFrameworkInput"></a>

```typescript
public readonly mlFrameworkInput: string;
```

- *Type:* string

---

##### `processorInput`<sup>Optional</sup> <a name="processorInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.processorInput"></a>

```typescript
public readonly processorInput: string;
```

- *Type:* string

---

##### `programmingLangInput`<sup>Optional</sup> <a name="programmingLangInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.programmingLangInput"></a>

```typescript
public readonly programmingLangInput: string;
```

- *Type:* string

---

##### `releaseNotesInput`<sup>Optional</sup> <a name="releaseNotesInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotesInput"></a>

```typescript
public readonly releaseNotesInput: string;
```

- *Type:* string

---

##### `vendorGuidanceInput`<sup>Optional</sup> <a name="vendorGuidanceInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidanceInput"></a>

```typescript
public readonly vendorGuidanceInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.aliases"></a>

```typescript
public readonly aliases: string[];
```

- *Type:* string[]

---

##### `baseImage`<sup>Required</sup> <a name="baseImage" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.baseImage"></a>

```typescript
public readonly baseImage: string;
```

- *Type:* string

---

##### `horovod`<sup>Required</sup> <a name="horovod" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.horovod"></a>

```typescript
public readonly horovod: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.jobType"></a>

```typescript
public readonly jobType: string;
```

- *Type:* string

---

##### `mlFramework`<sup>Required</sup> <a name="mlFramework" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.mlFramework"></a>

```typescript
public readonly mlFramework: string;
```

- *Type:* string

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.processor"></a>

```typescript
public readonly processor: string;
```

- *Type:* string

---

##### `programmingLang`<sup>Required</sup> <a name="programmingLang" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.programmingLang"></a>

```typescript
public readonly programmingLang: string;
```

- *Type:* string

---

##### `releaseNotes`<sup>Required</sup> <a name="releaseNotes" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotes"></a>

```typescript
public readonly releaseNotes: string;
```

- *Type:* string

---

##### `vendorGuidance`<sup>Required</sup> <a name="vendorGuidance" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidance"></a>

```typescript
public readonly vendorGuidance: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerImageVersionConfig <a name="SagemakerImageVersionConfig" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.Initializer"></a>

```typescript
import { sagemakerImageVersion } from '@cdktn/provider-awscc'

const sagemakerImageVersionConfig: sagemakerImageVersion.SagemakerImageVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.baseImage">baseImage</a></code> | <code>string</code> | The registry path of the container image on which this image version is based. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.imageName">imageName</a></code> | <code>string</code> | The name of the image this version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.alias">alias</a></code> | <code>string</code> | The alias of the image version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.aliases">aliases</a></code> | <code>string[]</code> | List of aliases for the image version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.horovod">horovod</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates Horovod compatibility. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.jobType">jobType</a></code> | <code>string</code> | Indicates SageMaker job type compatibility. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.mlFramework">mlFramework</a></code> | <code>string</code> | The machine learning framework vended in the image version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.processor">processor</a></code> | <code>string</code> | Indicates CPU or GPU compatibility. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.programmingLang">programmingLang</a></code> | <code>string</code> | The supported programming language and its version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.releaseNotes">releaseNotes</a></code> | <code>string</code> | The maintainer description of the image version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.vendorGuidance">vendorGuidance</a></code> | <code>string</code> | The availability of the image version specified by the maintainer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `baseImage`<sup>Required</sup> <a name="baseImage" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.baseImage"></a>

```typescript
public readonly baseImage: string;
```

- *Type:* string

The registry path of the container image on which this image version is based.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_image_version#base_image SagemakerImageVersion#base_image}

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

The name of the image this version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_image_version#image_name SagemakerImageVersion#image_name}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The alias of the image version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_image_version#alias SagemakerImageVersion#alias}

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.aliases"></a>

```typescript
public readonly aliases: string[];
```

- *Type:* string[]

List of aliases for the image version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_image_version#aliases SagemakerImageVersion#aliases}

---

##### `horovod`<sup>Optional</sup> <a name="horovod" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.horovod"></a>

```typescript
public readonly horovod: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates Horovod compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_image_version#horovod SagemakerImageVersion#horovod}

---

##### `jobType`<sup>Optional</sup> <a name="jobType" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.jobType"></a>

```typescript
public readonly jobType: string;
```

- *Type:* string

Indicates SageMaker job type compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_image_version#job_type SagemakerImageVersion#job_type}

---

##### `mlFramework`<sup>Optional</sup> <a name="mlFramework" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.mlFramework"></a>

```typescript
public readonly mlFramework: string;
```

- *Type:* string

The machine learning framework vended in the image version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_image_version#ml_framework SagemakerImageVersion#ml_framework}

---

##### `processor`<sup>Optional</sup> <a name="processor" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.processor"></a>

```typescript
public readonly processor: string;
```

- *Type:* string

Indicates CPU or GPU compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_image_version#processor SagemakerImageVersion#processor}

---

##### `programmingLang`<sup>Optional</sup> <a name="programmingLang" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.programmingLang"></a>

```typescript
public readonly programmingLang: string;
```

- *Type:* string

The supported programming language and its version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_image_version#programming_lang SagemakerImageVersion#programming_lang}

---

##### `releaseNotes`<sup>Optional</sup> <a name="releaseNotes" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.releaseNotes"></a>

```typescript
public readonly releaseNotes: string;
```

- *Type:* string

The maintainer description of the image version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_image_version#release_notes SagemakerImageVersion#release_notes}

---

##### `vendorGuidance`<sup>Optional</sup> <a name="vendorGuidance" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.vendorGuidance"></a>

```typescript
public readonly vendorGuidance: string;
```

- *Type:* string

The availability of the image version specified by the maintainer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_image_version#vendor_guidance SagemakerImageVersion#vendor_guidance}

---



