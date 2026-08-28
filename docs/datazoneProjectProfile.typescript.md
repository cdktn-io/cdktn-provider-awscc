# `datazoneProjectProfile` Submodule <a name="`datazoneProjectProfile` Submodule" id="@cdktn/provider-awscc.datazoneProjectProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneProjectProfile <a name="DatazoneProjectProfile" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile awscc_datazone_project_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

new datazoneProjectProfile.DatazoneProjectProfile(scope: Construct, id: string, config: DatazoneProjectProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig">DatazoneProjectProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig">DatazoneProjectProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.putEnvironmentConfigurations">putEnvironmentConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.putProjectResourceTags">putProjectResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetAllowCustomProjectResourceTags">resetAllowCustomProjectResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetDomainIdentifier">resetDomainIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetDomainUnitIdentifier">resetDomainUnitIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetEnvironmentConfigurations">resetEnvironmentConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetProjectResourceTags">resetProjectResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetProjectResourceTagsDescription">resetProjectResourceTagsDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetUseDefaultConfigurations">resetUseDefaultConfigurations</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEnvironmentConfigurations` <a name="putEnvironmentConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.putEnvironmentConfigurations"></a>

```typescript
public putEnvironmentConfigurations(value: IResolvable | DatazoneProjectProfileEnvironmentConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.putEnvironmentConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations">DatazoneProjectProfileEnvironmentConfigurations</a>[]

---

##### `putProjectResourceTags` <a name="putProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.putProjectResourceTags"></a>

```typescript
public putProjectResourceTags(value: IResolvable | DatazoneProjectProfileProjectResourceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.putProjectResourceTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags">DatazoneProjectProfileProjectResourceTags</a>[]

---

##### `resetAllowCustomProjectResourceTags` <a name="resetAllowCustomProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetAllowCustomProjectResourceTags"></a>

```typescript
public resetAllowCustomProjectResourceTags(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDomainIdentifier` <a name="resetDomainIdentifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetDomainIdentifier"></a>

```typescript
public resetDomainIdentifier(): void
```

##### `resetDomainUnitIdentifier` <a name="resetDomainUnitIdentifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetDomainUnitIdentifier"></a>

```typescript
public resetDomainUnitIdentifier(): void
```

##### `resetEnvironmentConfigurations` <a name="resetEnvironmentConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetEnvironmentConfigurations"></a>

```typescript
public resetEnvironmentConfigurations(): void
```

##### `resetProjectResourceTags` <a name="resetProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetProjectResourceTags"></a>

```typescript
public resetProjectResourceTags(): void
```

##### `resetProjectResourceTagsDescription` <a name="resetProjectResourceTagsDescription" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetProjectResourceTagsDescription"></a>

```typescript
public resetProjectResourceTagsDescription(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetUseDefaultConfigurations` <a name="resetUseDefaultConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetUseDefaultConfigurations"></a>

```typescript
public resetUseDefaultConfigurations(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneProjectProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isConstruct"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

datazoneProjectProfile.DatazoneProjectProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isTerraformElement"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

datazoneProjectProfile.DatazoneProjectProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isTerraformResource"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

datazoneProjectProfile.DatazoneProjectProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.generateConfigForImport"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

datazoneProjectProfile.DatazoneProjectProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatazoneProjectProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazoneProjectProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazoneProjectProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneProjectProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainUnitId">domainUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.environmentConfigurations">environmentConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList">DatazoneProjectProfileEnvironmentConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectProfileId">projectProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTags">projectResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList">DatazoneProjectProfileProjectResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.allowCustomProjectResourceTagsInput">allowCustomProjectResourceTagsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainUnitIdentifierInput">domainUnitIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.environmentConfigurationsInput">environmentConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations">DatazoneProjectProfileEnvironmentConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTagsDescriptionInput">projectResourceTagsDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTagsInput">projectResourceTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags">DatazoneProjectProfileProjectResourceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.useDefaultConfigurationsInput">useDefaultConfigurationsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.allowCustomProjectResourceTags">allowCustomProjectResourceTags</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainUnitIdentifier">domainUnitIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTagsDescription">projectResourceTagsDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.useDefaultConfigurations">useDefaultConfigurations</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `domainUnitId`<sup>Required</sup> <a name="domainUnitId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainUnitId"></a>

```typescript
public readonly domainUnitId: string;
```

- *Type:* string

---

##### `environmentConfigurations`<sup>Required</sup> <a name="environmentConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.environmentConfigurations"></a>

```typescript
public readonly environmentConfigurations: DatazoneProjectProfileEnvironmentConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList">DatazoneProjectProfileEnvironmentConfigurationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `projectProfileId`<sup>Required</sup> <a name="projectProfileId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectProfileId"></a>

```typescript
public readonly projectProfileId: string;
```

- *Type:* string

---

##### `projectResourceTags`<sup>Required</sup> <a name="projectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTags"></a>

```typescript
public readonly projectResourceTags: DatazoneProjectProfileProjectResourceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList">DatazoneProjectProfileProjectResourceTagsList</a>

---

##### `allowCustomProjectResourceTagsInput`<sup>Optional</sup> <a name="allowCustomProjectResourceTagsInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.allowCustomProjectResourceTagsInput"></a>

```typescript
public readonly allowCustomProjectResourceTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainIdentifierInput"></a>

```typescript
public readonly domainIdentifierInput: string;
```

- *Type:* string

---

##### `domainUnitIdentifierInput`<sup>Optional</sup> <a name="domainUnitIdentifierInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainUnitIdentifierInput"></a>

```typescript
public readonly domainUnitIdentifierInput: string;
```

- *Type:* string

---

##### `environmentConfigurationsInput`<sup>Optional</sup> <a name="environmentConfigurationsInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.environmentConfigurationsInput"></a>

```typescript
public readonly environmentConfigurationsInput: IResolvable | DatazoneProjectProfileEnvironmentConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations">DatazoneProjectProfileEnvironmentConfigurations</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectResourceTagsDescriptionInput`<sup>Optional</sup> <a name="projectResourceTagsDescriptionInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTagsDescriptionInput"></a>

```typescript
public readonly projectResourceTagsDescriptionInput: string;
```

- *Type:* string

---

##### `projectResourceTagsInput`<sup>Optional</sup> <a name="projectResourceTagsInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTagsInput"></a>

```typescript
public readonly projectResourceTagsInput: IResolvable | DatazoneProjectProfileProjectResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags">DatazoneProjectProfileProjectResourceTags</a>[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `useDefaultConfigurationsInput`<sup>Optional</sup> <a name="useDefaultConfigurationsInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.useDefaultConfigurationsInput"></a>

```typescript
public readonly useDefaultConfigurationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowCustomProjectResourceTags`<sup>Required</sup> <a name="allowCustomProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.allowCustomProjectResourceTags"></a>

```typescript
public readonly allowCustomProjectResourceTags: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

---

##### `domainUnitIdentifier`<sup>Required</sup> <a name="domainUnitIdentifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainUnitIdentifier"></a>

```typescript
public readonly domainUnitIdentifier: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectResourceTagsDescription`<sup>Required</sup> <a name="projectResourceTagsDescription" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTagsDescription"></a>

```typescript
public readonly projectResourceTagsDescription: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `useDefaultConfigurations`<sup>Required</sup> <a name="useDefaultConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.useDefaultConfigurations"></a>

```typescript
public readonly useDefaultConfigurations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneProjectProfileConfig <a name="DatazoneProjectProfileConfig" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

const datazoneProjectProfileConfig: datazoneProjectProfile.DatazoneProjectProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.allowCustomProjectResourceTags">allowCustomProjectResourceTags</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#allow_custom_project_resource_tags DatazoneProjectProfile#allow_custom_project_resource_tags}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#description DatazoneProjectProfile#description}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#domain_identifier DatazoneProjectProfile#domain_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.domainUnitIdentifier">domainUnitIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#domain_unit_identifier DatazoneProjectProfile#domain_unit_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.environmentConfigurations">environmentConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations">DatazoneProjectProfileEnvironmentConfigurations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#environment_configurations DatazoneProjectProfile#environment_configurations}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.projectResourceTags">projectResourceTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags">DatazoneProjectProfileProjectResourceTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#project_resource_tags DatazoneProjectProfile#project_resource_tags}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.projectResourceTagsDescription">projectResourceTagsDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#project_resource_tags_description DatazoneProjectProfile#project_resource_tags_description}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#status DatazoneProjectProfile#status}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.useDefaultConfigurations">useDefaultConfigurations</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#use_default_configurations DatazoneProjectProfile#use_default_configurations}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}.

---

##### `allowCustomProjectResourceTags`<sup>Optional</sup> <a name="allowCustomProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.allowCustomProjectResourceTags"></a>

```typescript
public readonly allowCustomProjectResourceTags: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#allow_custom_project_resource_tags DatazoneProjectProfile#allow_custom_project_resource_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#description DatazoneProjectProfile#description}.

---

##### `domainIdentifier`<sup>Optional</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#domain_identifier DatazoneProjectProfile#domain_identifier}.

---

##### `domainUnitIdentifier`<sup>Optional</sup> <a name="domainUnitIdentifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.domainUnitIdentifier"></a>

```typescript
public readonly domainUnitIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#domain_unit_identifier DatazoneProjectProfile#domain_unit_identifier}.

---

##### `environmentConfigurations`<sup>Optional</sup> <a name="environmentConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.environmentConfigurations"></a>

```typescript
public readonly environmentConfigurations: IResolvable | DatazoneProjectProfileEnvironmentConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations">DatazoneProjectProfileEnvironmentConfigurations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#environment_configurations DatazoneProjectProfile#environment_configurations}.

---

##### `projectResourceTags`<sup>Optional</sup> <a name="projectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.projectResourceTags"></a>

```typescript
public readonly projectResourceTags: IResolvable | DatazoneProjectProfileProjectResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags">DatazoneProjectProfileProjectResourceTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#project_resource_tags DatazoneProjectProfile#project_resource_tags}.

---

##### `projectResourceTagsDescription`<sup>Optional</sup> <a name="projectResourceTagsDescription" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.projectResourceTagsDescription"></a>

```typescript
public readonly projectResourceTagsDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#project_resource_tags_description DatazoneProjectProfile#project_resource_tags_description}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#status DatazoneProjectProfile#status}.

---

##### `useDefaultConfigurations`<sup>Optional</sup> <a name="useDefaultConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.useDefaultConfigurations"></a>

```typescript
public readonly useDefaultConfigurations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#use_default_configurations DatazoneProjectProfile#use_default_configurations}.

---

### DatazoneProjectProfileEnvironmentConfigurations <a name="DatazoneProjectProfileEnvironmentConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

const datazoneProjectProfileEnvironmentConfigurations: datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.awsAccount">awsAccount</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#aws_account DatazoneProjectProfile#aws_account}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.awsRegion">awsRegion</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#aws_region DatazoneProjectProfile#aws_region}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.configurationParameters">configurationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#configuration_parameters DatazoneProjectProfile#configuration_parameters}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.deploymentMode">deploymentMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#deployment_mode DatazoneProjectProfile#deployment_mode}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.deploymentOrder">deploymentOrder</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#deployment_order DatazoneProjectProfile#deployment_order}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#description DatazoneProjectProfile#description}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.environmentBlueprintId">environmentBlueprintId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#environment_blueprint_id DatazoneProjectProfile#environment_blueprint_id}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.environmentConfigurationId">environmentConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#environment_configuration_id DatazoneProjectProfile#environment_configuration_id}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}. |

---

##### `awsAccount`<sup>Optional</sup> <a name="awsAccount" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.awsAccount"></a>

```typescript
public readonly awsAccount: DatazoneProjectProfileEnvironmentConfigurationsAwsAccount;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#aws_account DatazoneProjectProfile#aws_account}.

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.awsRegion"></a>

```typescript
public readonly awsRegion: DatazoneProjectProfileEnvironmentConfigurationsAwsRegion;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#aws_region DatazoneProjectProfile#aws_region}.

---

##### `configurationParameters`<sup>Optional</sup> <a name="configurationParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.configurationParameters"></a>

```typescript
public readonly configurationParameters: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#configuration_parameters DatazoneProjectProfile#configuration_parameters}.

---

##### `deploymentMode`<sup>Optional</sup> <a name="deploymentMode" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.deploymentMode"></a>

```typescript
public readonly deploymentMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#deployment_mode DatazoneProjectProfile#deployment_mode}.

---

##### `deploymentOrder`<sup>Optional</sup> <a name="deploymentOrder" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.deploymentOrder"></a>

```typescript
public readonly deploymentOrder: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#deployment_order DatazoneProjectProfile#deployment_order}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#description DatazoneProjectProfile#description}.

---

##### `environmentBlueprintId`<sup>Optional</sup> <a name="environmentBlueprintId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.environmentBlueprintId"></a>

```typescript
public readonly environmentBlueprintId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#environment_blueprint_id DatazoneProjectProfile#environment_blueprint_id}.

---

##### `environmentConfigurationId`<sup>Optional</sup> <a name="environmentConfigurationId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.environmentConfigurationId"></a>

```typescript
public readonly environmentConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#environment_configuration_id DatazoneProjectProfile#environment_configuration_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}.

---

### DatazoneProjectProfileEnvironmentConfigurationsAwsAccount <a name="DatazoneProjectProfileEnvironmentConfigurationsAwsAccount" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

const datazoneProjectProfileEnvironmentConfigurationsAwsAccount: datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#aws_account_id DatazoneProjectProfile#aws_account_id}. |

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#aws_account_id DatazoneProjectProfile#aws_account_id}.

---

### DatazoneProjectProfileEnvironmentConfigurationsAwsRegion <a name="DatazoneProjectProfileEnvironmentConfigurationsAwsRegion" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

const datazoneProjectProfileEnvironmentConfigurationsAwsRegion: datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion.property.regionName">regionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#region_name DatazoneProjectProfile#region_name}. |

---

##### `regionName`<sup>Optional</sup> <a name="regionName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#region_name DatazoneProjectProfile#region_name}.

---

### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

const datazoneProjectProfileEnvironmentConfigurationsConfigurationParameters: datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.property.parameterOverrides">parameterOverrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#parameter_overrides DatazoneProjectProfile#parameter_overrides}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.property.resolvedParameters">resolvedParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#resolved_parameters DatazoneProjectProfile#resolved_parameters}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.property.ssmPath">ssmPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#ssm_path DatazoneProjectProfile#ssm_path}. |

---

##### `parameterOverrides`<sup>Optional</sup> <a name="parameterOverrides" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.property.parameterOverrides"></a>

```typescript
public readonly parameterOverrides: IResolvable | DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#parameter_overrides DatazoneProjectProfile#parameter_overrides}.

---

##### `resolvedParameters`<sup>Optional</sup> <a name="resolvedParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.property.resolvedParameters"></a>

```typescript
public readonly resolvedParameters: IResolvable | DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#resolved_parameters DatazoneProjectProfile#resolved_parameters}.

---

##### `ssmPath`<sup>Optional</sup> <a name="ssmPath" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.property.ssmPath"></a>

```typescript
public readonly ssmPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#ssm_path DatazoneProjectProfile#ssm_path}.

---

### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

const datazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides: datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.property.isEditable">isEditable</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#is_editable DatazoneProjectProfile#is_editable}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}. |

---

##### `isEditable`<sup>Optional</sup> <a name="isEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.property.isEditable"></a>

```typescript
public readonly isEditable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#is_editable DatazoneProjectProfile#is_editable}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}.

---

### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

const datazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters: datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.property.isEditable">isEditable</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#is_editable DatazoneProjectProfile#is_editable}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}. |

---

##### `isEditable`<sup>Optional</sup> <a name="isEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.property.isEditable"></a>

```typescript
public readonly isEditable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#is_editable DatazoneProjectProfile#is_editable}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}.

---

### DatazoneProjectProfileProjectResourceTags <a name="DatazoneProjectProfileProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

const datazoneProjectProfileProjectResourceTags: datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.property.isValueEditable">isValueEditable</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#is_value_editable DatazoneProjectProfile#is_value_editable}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#key DatazoneProjectProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}. |

---

##### `isValueEditable`<sup>Optional</sup> <a name="isValueEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.property.isValueEditable"></a>

```typescript
public readonly isValueEditable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#is_value_editable DatazoneProjectProfile#is_value_editable}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#key DatazoneProjectProfile#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference <a name="DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

new datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resetAwsAccountId"></a>

```typescript
public resetAwsAccountId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectProfileEnvironmentConfigurationsAwsAccount;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a>

---


### DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference <a name="DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

new datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resetRegionName">resetRegionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegionName` <a name="resetRegionName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resetRegionName"></a>

```typescript
public resetRegionName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.regionNameInput">regionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionNameInput`<sup>Optional</sup> <a name="regionNameInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.regionNameInput"></a>

```typescript
public readonly regionNameInput: string;
```

- *Type:* string

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectProfileEnvironmentConfigurationsAwsRegion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a>

---


### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

new datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.putParameterOverrides">putParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.putResolvedParameters">putResolvedParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resetParameterOverrides">resetParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resetResolvedParameters">resetResolvedParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resetSsmPath">resetSsmPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameterOverrides` <a name="putParameterOverrides" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.putParameterOverrides"></a>

```typescript
public putParameterOverrides(value: IResolvable | DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.putParameterOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a>[]

---

##### `putResolvedParameters` <a name="putResolvedParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.putResolvedParameters"></a>

```typescript
public putResolvedParameters(value: IResolvable | DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.putResolvedParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a>[]

---

##### `resetParameterOverrides` <a name="resetParameterOverrides" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resetParameterOverrides"></a>

```typescript
public resetParameterOverrides(): void
```

##### `resetResolvedParameters` <a name="resetResolvedParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resetResolvedParameters"></a>

```typescript
public resetResolvedParameters(): void
```

##### `resetSsmPath` <a name="resetSsmPath" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resetSsmPath"></a>

```typescript
public resetSsmPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.parameterOverrides">parameterOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.resolvedParameters">resolvedParameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.parameterOverridesInput">parameterOverridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.resolvedParametersInput">resolvedParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.ssmPathInput">ssmPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.ssmPath">ssmPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterOverrides`<sup>Required</sup> <a name="parameterOverrides" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.parameterOverrides"></a>

```typescript
public readonly parameterOverrides: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList</a>

---

##### `resolvedParameters`<sup>Required</sup> <a name="resolvedParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.resolvedParameters"></a>

```typescript
public readonly resolvedParameters: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList</a>

---

##### `parameterOverridesInput`<sup>Optional</sup> <a name="parameterOverridesInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.parameterOverridesInput"></a>

```typescript
public readonly parameterOverridesInput: IResolvable | DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a>[]

---

##### `resolvedParametersInput`<sup>Optional</sup> <a name="resolvedParametersInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.resolvedParametersInput"></a>

```typescript
public readonly resolvedParametersInput: IResolvable | DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a>[]

---

##### `ssmPathInput`<sup>Optional</sup> <a name="ssmPathInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.ssmPathInput"></a>

```typescript
public readonly ssmPathInput: string;
```

- *Type:* string

---

##### `ssmPath`<sup>Required</sup> <a name="ssmPath" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.ssmPath"></a>

```typescript
public readonly ssmPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a>

---


### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

new datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.get"></a>

```typescript
public get(index: number): DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a>[]

---


### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

new datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resetIsEditable">resetIsEditable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEditable` <a name="resetIsEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resetIsEditable"></a>

```typescript
public resetIsEditable(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.isEditableInput">isEditableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.isEditable">isEditable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEditableInput`<sup>Optional</sup> <a name="isEditableInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.isEditableInput"></a>

```typescript
public readonly isEditableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `isEditable`<sup>Required</sup> <a name="isEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.isEditable"></a>

```typescript
public readonly isEditable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a>

---


### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

new datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.get"></a>

```typescript
public get(index: number): DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a>[]

---


### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

new datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resetIsEditable">resetIsEditable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEditable` <a name="resetIsEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resetIsEditable"></a>

```typescript
public resetIsEditable(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.isEditableInput">isEditableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.isEditable">isEditable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEditableInput`<sup>Optional</sup> <a name="isEditableInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.isEditableInput"></a>

```typescript
public readonly isEditableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `isEditable`<sup>Required</sup> <a name="isEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.isEditable"></a>

```typescript
public readonly isEditable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a>

---


### DatazoneProjectProfileEnvironmentConfigurationsList <a name="DatazoneProjectProfileEnvironmentConfigurationsList" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

new datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.get"></a>

```typescript
public get(index: number): DatazoneProjectProfileEnvironmentConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations">DatazoneProjectProfileEnvironmentConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectProfileEnvironmentConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations">DatazoneProjectProfileEnvironmentConfigurations</a>[]

---


### DatazoneProjectProfileEnvironmentConfigurationsOutputReference <a name="DatazoneProjectProfileEnvironmentConfigurationsOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

new datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putAwsAccount">putAwsAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putAwsRegion">putAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putConfigurationParameters">putConfigurationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetAwsAccount">resetAwsAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetConfigurationParameters">resetConfigurationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetDeploymentMode">resetDeploymentMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetDeploymentOrder">resetDeploymentOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetEnvironmentBlueprintId">resetEnvironmentBlueprintId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetEnvironmentConfigurationId">resetEnvironmentConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsAccount` <a name="putAwsAccount" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putAwsAccount"></a>

```typescript
public putAwsAccount(value: DatazoneProjectProfileEnvironmentConfigurationsAwsAccount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putAwsAccount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a>

---

##### `putAwsRegion` <a name="putAwsRegion" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putAwsRegion"></a>

```typescript
public putAwsRegion(value: DatazoneProjectProfileEnvironmentConfigurationsAwsRegion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putAwsRegion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a>

---

##### `putConfigurationParameters` <a name="putConfigurationParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putConfigurationParameters"></a>

```typescript
public putConfigurationParameters(value: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putConfigurationParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a>

---

##### `resetAwsAccount` <a name="resetAwsAccount" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetAwsAccount"></a>

```typescript
public resetAwsAccount(): void
```

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetAwsRegion"></a>

```typescript
public resetAwsRegion(): void
```

##### `resetConfigurationParameters` <a name="resetConfigurationParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetConfigurationParameters"></a>

```typescript
public resetConfigurationParameters(): void
```

##### `resetDeploymentMode` <a name="resetDeploymentMode" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetDeploymentMode"></a>

```typescript
public resetDeploymentMode(): void
```

##### `resetDeploymentOrder` <a name="resetDeploymentOrder" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetDeploymentOrder"></a>

```typescript
public resetDeploymentOrder(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnvironmentBlueprintId` <a name="resetEnvironmentBlueprintId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetEnvironmentBlueprintId"></a>

```typescript
public resetEnvironmentBlueprintId(): void
```

##### `resetEnvironmentConfigurationId` <a name="resetEnvironmentConfigurationId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetEnvironmentConfigurationId"></a>

```typescript
public resetEnvironmentConfigurationId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsAccount">awsAccount</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference">DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsRegion">awsRegion</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference">DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.configurationParameters">configurationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsAccountInput">awsAccountInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.configurationParametersInput">configurationParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentModeInput">deploymentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentOrderInput">deploymentOrderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentBlueprintIdInput">environmentBlueprintIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentConfigurationIdInput">environmentConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentMode">deploymentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentOrder">deploymentOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentBlueprintId">environmentBlueprintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentConfigurationId">environmentConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations">DatazoneProjectProfileEnvironmentConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsAccount`<sup>Required</sup> <a name="awsAccount" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsAccount"></a>

```typescript
public readonly awsAccount: DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference">DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference</a>

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference">DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference</a>

---

##### `configurationParameters`<sup>Required</sup> <a name="configurationParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.configurationParameters"></a>

```typescript
public readonly configurationParameters: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference</a>

---

##### `awsAccountInput`<sup>Optional</sup> <a name="awsAccountInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsAccountInput"></a>

```typescript
public readonly awsAccountInput: IResolvable | DatazoneProjectProfileEnvironmentConfigurationsAwsAccount;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a>

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: IResolvable | DatazoneProjectProfileEnvironmentConfigurationsAwsRegion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a>

---

##### `configurationParametersInput`<sup>Optional</sup> <a name="configurationParametersInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.configurationParametersInput"></a>

```typescript
public readonly configurationParametersInput: IResolvable | DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a>

---

##### `deploymentModeInput`<sup>Optional</sup> <a name="deploymentModeInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentModeInput"></a>

```typescript
public readonly deploymentModeInput: string;
```

- *Type:* string

---

##### `deploymentOrderInput`<sup>Optional</sup> <a name="deploymentOrderInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentOrderInput"></a>

```typescript
public readonly deploymentOrderInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `environmentBlueprintIdInput`<sup>Optional</sup> <a name="environmentBlueprintIdInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentBlueprintIdInput"></a>

```typescript
public readonly environmentBlueprintIdInput: string;
```

- *Type:* string

---

##### `environmentConfigurationIdInput`<sup>Optional</sup> <a name="environmentConfigurationIdInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentConfigurationIdInput"></a>

```typescript
public readonly environmentConfigurationIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `deploymentMode`<sup>Required</sup> <a name="deploymentMode" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentMode"></a>

```typescript
public readonly deploymentMode: string;
```

- *Type:* string

---

##### `deploymentOrder`<sup>Required</sup> <a name="deploymentOrder" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentOrder"></a>

```typescript
public readonly deploymentOrder: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environmentBlueprintId`<sup>Required</sup> <a name="environmentBlueprintId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentBlueprintId"></a>

```typescript
public readonly environmentBlueprintId: string;
```

- *Type:* string

---

##### `environmentConfigurationId`<sup>Required</sup> <a name="environmentConfigurationId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentConfigurationId"></a>

```typescript
public readonly environmentConfigurationId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectProfileEnvironmentConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations">DatazoneProjectProfileEnvironmentConfigurations</a>

---


### DatazoneProjectProfileProjectResourceTagsList <a name="DatazoneProjectProfileProjectResourceTagsList" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

new datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.get"></a>

```typescript
public get(index: number): DatazoneProjectProfileProjectResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags">DatazoneProjectProfileProjectResourceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectProfileProjectResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags">DatazoneProjectProfileProjectResourceTags</a>[]

---


### DatazoneProjectProfileProjectResourceTagsOutputReference <a name="DatazoneProjectProfileProjectResourceTagsOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer"></a>

```typescript
import { datazoneProjectProfile } from '@cdktn/provider-awscc'

new datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resetIsValueEditable">resetIsValueEditable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsValueEditable` <a name="resetIsValueEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resetIsValueEditable"></a>

```typescript
public resetIsValueEditable(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.isValueEditableInput">isValueEditableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.isValueEditable">isValueEditable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags">DatazoneProjectProfileProjectResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isValueEditableInput`<sup>Optional</sup> <a name="isValueEditableInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.isValueEditableInput"></a>

```typescript
public readonly isValueEditableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `isValueEditable`<sup>Required</sup> <a name="isValueEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.isValueEditable"></a>

```typescript
public readonly isValueEditable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectProfileProjectResourceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags">DatazoneProjectProfileProjectResourceTags</a>

---



