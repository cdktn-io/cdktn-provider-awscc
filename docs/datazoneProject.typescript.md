# `datazoneProject` Submodule <a name="`datazoneProject` Submodule" id="@cdktn/provider-awscc.datazoneProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneProject <a name="DatazoneProject" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project awscc_datazone_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

new datazoneProject.DatazoneProject(scope: Construct, id: string, config: DatazoneProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig">DatazoneProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig">DatazoneProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.putMembershipAssignments">putMembershipAssignments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.putResourceTags">putResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.putUserParameters">putUserParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetDomainUnitId">resetDomainUnitId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetGlossaryTerms">resetGlossaryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetMembershipAssignments">resetMembershipAssignments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectCategory">resetProjectCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectExecutionRole">resetProjectExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectProfileId">resetProjectProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectProfileVersion">resetProjectProfileVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetResourceTags">resetResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetUserParameters">resetUserParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMembershipAssignments` <a name="putMembershipAssignments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.putMembershipAssignments"></a>

```typescript
public putMembershipAssignments(value: IResolvable | DatazoneProjectMembershipAssignments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.putMembershipAssignments.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>[]

---

##### `putResourceTags` <a name="putResourceTags" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.putResourceTags"></a>

```typescript
public putResourceTags(value: IResolvable | DatazoneProjectResourceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.putResourceTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>[]

---

##### `putUserParameters` <a name="putUserParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.putUserParameters"></a>

```typescript
public putUserParameters(value: IResolvable | DatazoneProjectUserParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.putUserParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDomainUnitId` <a name="resetDomainUnitId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetDomainUnitId"></a>

```typescript
public resetDomainUnitId(): void
```

##### `resetGlossaryTerms` <a name="resetGlossaryTerms" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetGlossaryTerms"></a>

```typescript
public resetGlossaryTerms(): void
```

##### `resetMembershipAssignments` <a name="resetMembershipAssignments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetMembershipAssignments"></a>

```typescript
public resetMembershipAssignments(): void
```

##### `resetProjectCategory` <a name="resetProjectCategory" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectCategory"></a>

```typescript
public resetProjectCategory(): void
```

##### `resetProjectExecutionRole` <a name="resetProjectExecutionRole" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectExecutionRole"></a>

```typescript
public resetProjectExecutionRole(): void
```

##### `resetProjectProfileId` <a name="resetProjectProfileId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectProfileId"></a>

```typescript
public resetProjectProfileId(): void
```

##### `resetProjectProfileVersion` <a name="resetProjectProfileVersion" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectProfileVersion"></a>

```typescript
public resetProjectProfileVersion(): void
```

##### `resetResourceTags` <a name="resetResourceTags" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetResourceTags"></a>

```typescript
public resetResourceTags(): void
```

##### `resetUserParameters` <a name="resetUserParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetUserParameters"></a>

```typescript
public resetUserParameters(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneProject resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.isConstruct"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

datazoneProject.DatazoneProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.isTerraformElement"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

datazoneProject.DatazoneProject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.isTerraformResource"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

datazoneProject.DatazoneProject.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.generateConfigForImport"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

datazoneProject.DatazoneProject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatazoneProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazoneProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazoneProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.membershipAssignments">membershipAssignments</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList">DatazoneProjectMembershipAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectStatus">projectStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.resourceTags">resourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList">DatazoneProjectResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.userParameters">userParameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList">DatazoneProjectUserParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainUnitIdInput">domainUnitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.glossaryTermsInput">glossaryTermsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.membershipAssignmentsInput">membershipAssignmentsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectCategoryInput">projectCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectExecutionRoleInput">projectExecutionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileIdInput">projectProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileVersionInput">projectProfileVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.resourceTagsInput">resourceTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.userParametersInput">userParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainUnitId">domainUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.glossaryTerms">glossaryTerms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectCategory">projectCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectExecutionRole">projectExecutionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileId">projectProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileVersion">projectProfileVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `membershipAssignments`<sup>Required</sup> <a name="membershipAssignments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.membershipAssignments"></a>

```typescript
public readonly membershipAssignments: DatazoneProjectMembershipAssignmentsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList">DatazoneProjectMembershipAssignmentsList</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `projectStatus`<sup>Required</sup> <a name="projectStatus" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectStatus"></a>

```typescript
public readonly projectStatus: string;
```

- *Type:* string

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.resourceTags"></a>

```typescript
public readonly resourceTags: DatazoneProjectResourceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList">DatazoneProjectResourceTagsList</a>

---

##### `userParameters`<sup>Required</sup> <a name="userParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.userParameters"></a>

```typescript
public readonly userParameters: DatazoneProjectUserParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList">DatazoneProjectUserParametersList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainIdentifierInput"></a>

```typescript
public readonly domainIdentifierInput: string;
```

- *Type:* string

---

##### `domainUnitIdInput`<sup>Optional</sup> <a name="domainUnitIdInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainUnitIdInput"></a>

```typescript
public readonly domainUnitIdInput: string;
```

- *Type:* string

---

##### `glossaryTermsInput`<sup>Optional</sup> <a name="glossaryTermsInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.glossaryTermsInput"></a>

```typescript
public readonly glossaryTermsInput: string[];
```

- *Type:* string[]

---

##### `membershipAssignmentsInput`<sup>Optional</sup> <a name="membershipAssignmentsInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.membershipAssignmentsInput"></a>

```typescript
public readonly membershipAssignmentsInput: IResolvable | DatazoneProjectMembershipAssignments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectCategoryInput`<sup>Optional</sup> <a name="projectCategoryInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectCategoryInput"></a>

```typescript
public readonly projectCategoryInput: string;
```

- *Type:* string

---

##### `projectExecutionRoleInput`<sup>Optional</sup> <a name="projectExecutionRoleInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectExecutionRoleInput"></a>

```typescript
public readonly projectExecutionRoleInput: string;
```

- *Type:* string

---

##### `projectProfileIdInput`<sup>Optional</sup> <a name="projectProfileIdInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileIdInput"></a>

```typescript
public readonly projectProfileIdInput: string;
```

- *Type:* string

---

##### `projectProfileVersionInput`<sup>Optional</sup> <a name="projectProfileVersionInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileVersionInput"></a>

```typescript
public readonly projectProfileVersionInput: string;
```

- *Type:* string

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.resourceTagsInput"></a>

```typescript
public readonly resourceTagsInput: IResolvable | DatazoneProjectResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>[]

---

##### `userParametersInput`<sup>Optional</sup> <a name="userParametersInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.userParametersInput"></a>

```typescript
public readonly userParametersInput: IResolvable | DatazoneProjectUserParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

---

##### `domainUnitId`<sup>Required</sup> <a name="domainUnitId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainUnitId"></a>

```typescript
public readonly domainUnitId: string;
```

- *Type:* string

---

##### `glossaryTerms`<sup>Required</sup> <a name="glossaryTerms" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.glossaryTerms"></a>

```typescript
public readonly glossaryTerms: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectCategory`<sup>Required</sup> <a name="projectCategory" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectCategory"></a>

```typescript
public readonly projectCategory: string;
```

- *Type:* string

---

##### `projectExecutionRole`<sup>Required</sup> <a name="projectExecutionRole" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectExecutionRole"></a>

```typescript
public readonly projectExecutionRole: string;
```

- *Type:* string

---

##### `projectProfileId`<sup>Required</sup> <a name="projectProfileId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileId"></a>

```typescript
public readonly projectProfileId: string;
```

- *Type:* string

---

##### `projectProfileVersion`<sup>Required</sup> <a name="projectProfileVersion" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileVersion"></a>

```typescript
public readonly projectProfileVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneProjectConfig <a name="DatazoneProjectConfig" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.Initializer"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

const datazoneProjectConfig: datazoneProject.DatazoneProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | The ID of the Amazon DataZone domain in which this project is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.name">name</a></code> | <code>string</code> | The name of the Amazon DataZone project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.description">description</a></code> | <code>string</code> | The description of the Amazon DataZone project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.domainUnitId">domainUnitId</a></code> | <code>string</code> | The ID of the domain unit. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.glossaryTerms">glossaryTerms</a></code> | <code>string[]</code> | The glossary terms that can be used in this Amazon DataZone project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.membershipAssignments">membershipAssignments</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>[]</code> | The project membership assignments. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectCategory">projectCategory</a></code> | <code>string</code> | The project category. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectExecutionRole">projectExecutionRole</a></code> | <code>string</code> | The project execution role ARN. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectProfileId">projectProfileId</a></code> | <code>string</code> | The project profile ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectProfileVersion">projectProfileVersion</a></code> | <code>string</code> | The project profile version to which the project should be updated. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.resourceTags">resourceTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>[]</code> | The resource tags of the project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.userParameters">userParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>[]</code> | The user parameters of the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

The ID of the Amazon DataZone domain in which this project is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#domain_identifier DatazoneProject#domain_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Amazon DataZone project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#name DatazoneProject#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the Amazon DataZone project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#description DatazoneProject#description}

---

##### `domainUnitId`<sup>Optional</sup> <a name="domainUnitId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.domainUnitId"></a>

```typescript
public readonly domainUnitId: string;
```

- *Type:* string

The ID of the domain unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#domain_unit_id DatazoneProject#domain_unit_id}

---

##### `glossaryTerms`<sup>Optional</sup> <a name="glossaryTerms" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.glossaryTerms"></a>

```typescript
public readonly glossaryTerms: string[];
```

- *Type:* string[]

The glossary terms that can be used in this Amazon DataZone project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#glossary_terms DatazoneProject#glossary_terms}

---

##### `membershipAssignments`<sup>Optional</sup> <a name="membershipAssignments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.membershipAssignments"></a>

```typescript
public readonly membershipAssignments: IResolvable | DatazoneProjectMembershipAssignments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>[]

The project membership assignments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#membership_assignments DatazoneProject#membership_assignments}

---

##### `projectCategory`<sup>Optional</sup> <a name="projectCategory" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectCategory"></a>

```typescript
public readonly projectCategory: string;
```

- *Type:* string

The project category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#project_category DatazoneProject#project_category}

---

##### `projectExecutionRole`<sup>Optional</sup> <a name="projectExecutionRole" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectExecutionRole"></a>

```typescript
public readonly projectExecutionRole: string;
```

- *Type:* string

The project execution role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#project_execution_role DatazoneProject#project_execution_role}

---

##### `projectProfileId`<sup>Optional</sup> <a name="projectProfileId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectProfileId"></a>

```typescript
public readonly projectProfileId: string;
```

- *Type:* string

The project profile ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#project_profile_id DatazoneProject#project_profile_id}

---

##### `projectProfileVersion`<sup>Optional</sup> <a name="projectProfileVersion" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectProfileVersion"></a>

```typescript
public readonly projectProfileVersion: string;
```

- *Type:* string

The project profile version to which the project should be updated.

You can only specify the following string for this parameter: latest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#project_profile_version DatazoneProject#project_profile_version}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.resourceTags"></a>

```typescript
public readonly resourceTags: IResolvable | DatazoneProjectResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>[]

The resource tags of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#resource_tags DatazoneProject#resource_tags}

---

##### `userParameters`<sup>Optional</sup> <a name="userParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.userParameters"></a>

```typescript
public readonly userParameters: IResolvable | DatazoneProjectUserParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>[]

The user parameters of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#user_parameters DatazoneProject#user_parameters}

---

### DatazoneProjectMembershipAssignments <a name="DatazoneProjectMembershipAssignments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments.Initializer"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

const datazoneProjectMembershipAssignments: datazoneProject.DatazoneProjectMembershipAssignments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments.property.designation">designation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#designation DatazoneProject#designation}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments.property.member">member</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a></code> | The member of the project. |

---

##### `designation`<sup>Optional</sup> <a name="designation" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments.property.designation"></a>

```typescript
public readonly designation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#designation DatazoneProject#designation}.

---

##### `member`<sup>Optional</sup> <a name="member" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments.property.member"></a>

```typescript
public readonly member: DatazoneProjectMembershipAssignmentsMember;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a>

The member of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#member DatazoneProject#member}

---

### DatazoneProjectMembershipAssignmentsMember <a name="DatazoneProjectMembershipAssignmentsMember" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember.Initializer"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

const datazoneProjectMembershipAssignmentsMember: datazoneProject.DatazoneProjectMembershipAssignmentsMember = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember.property.groupIdentifier">groupIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#group_identifier DatazoneProject#group_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember.property.userIdentifier">userIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#user_identifier DatazoneProject#user_identifier}. |

---

##### `groupIdentifier`<sup>Optional</sup> <a name="groupIdentifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember.property.groupIdentifier"></a>

```typescript
public readonly groupIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#group_identifier DatazoneProject#group_identifier}.

---

##### `userIdentifier`<sup>Optional</sup> <a name="userIdentifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember.property.userIdentifier"></a>

```typescript
public readonly userIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#user_identifier DatazoneProject#user_identifier}.

---

### DatazoneProjectResourceTags <a name="DatazoneProjectResourceTags" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags.Initializer"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

const datazoneProjectResourceTags: datazoneProject.DatazoneProjectResourceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#key DatazoneProject#key}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#value DatazoneProject#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#key DatazoneProject#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#value DatazoneProject#value}.

---

### DatazoneProjectUserParameters <a name="DatazoneProjectUserParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.Initializer"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

const datazoneProjectUserParameters: datazoneProject.DatazoneProjectUserParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.property.environmentConfigurationName">environmentConfigurationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#environment_configuration_name DatazoneProject#environment_configuration_name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.property.environmentId">environmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#environment_id DatazoneProject#environment_id}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.property.environmentParameters">environmentParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#environment_parameters DatazoneProject#environment_parameters}. |

---

##### `environmentConfigurationName`<sup>Optional</sup> <a name="environmentConfigurationName" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.property.environmentConfigurationName"></a>

```typescript
public readonly environmentConfigurationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#environment_configuration_name DatazoneProject#environment_configuration_name}.

---

##### `environmentId`<sup>Optional</sup> <a name="environmentId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#environment_id DatazoneProject#environment_id}.

---

##### `environmentParameters`<sup>Optional</sup> <a name="environmentParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.property.environmentParameters"></a>

```typescript
public readonly environmentParameters: IResolvable | DatazoneProjectUserParametersEnvironmentParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#environment_parameters DatazoneProject#environment_parameters}.

---

### DatazoneProjectUserParametersEnvironmentParameters <a name="DatazoneProjectUserParametersEnvironmentParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters.Initializer"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

const datazoneProjectUserParametersEnvironmentParameters: datazoneProject.DatazoneProjectUserParametersEnvironmentParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#name DatazoneProject#name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#value DatazoneProject#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#name DatazoneProject#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#value DatazoneProject#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneProjectMembershipAssignmentsList <a name="DatazoneProjectMembershipAssignmentsList" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

new datazoneProject.DatazoneProjectMembershipAssignmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.get"></a>

```typescript
public get(index: number): DatazoneProjectMembershipAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectMembershipAssignments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>[]

---


### DatazoneProjectMembershipAssignmentsMemberOutputReference <a name="DatazoneProjectMembershipAssignmentsMemberOutputReference" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.Initializer"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

new datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resetGroupIdentifier">resetGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resetUserIdentifier">resetUserIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupIdentifier` <a name="resetGroupIdentifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resetGroupIdentifier"></a>

```typescript
public resetGroupIdentifier(): void
```

##### `resetUserIdentifier` <a name="resetUserIdentifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resetUserIdentifier"></a>

```typescript
public resetUserIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.groupIdentifierInput">groupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.userIdentifierInput">userIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.groupIdentifier">groupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.userIdentifier">userIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupIdentifierInput`<sup>Optional</sup> <a name="groupIdentifierInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.groupIdentifierInput"></a>

```typescript
public readonly groupIdentifierInput: string;
```

- *Type:* string

---

##### `userIdentifierInput`<sup>Optional</sup> <a name="userIdentifierInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.userIdentifierInput"></a>

```typescript
public readonly userIdentifierInput: string;
```

- *Type:* string

---

##### `groupIdentifier`<sup>Required</sup> <a name="groupIdentifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.groupIdentifier"></a>

```typescript
public readonly groupIdentifier: string;
```

- *Type:* string

---

##### `userIdentifier`<sup>Required</sup> <a name="userIdentifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.userIdentifier"></a>

```typescript
public readonly userIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectMembershipAssignmentsMember;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a>

---


### DatazoneProjectMembershipAssignmentsOutputReference <a name="DatazoneProjectMembershipAssignmentsOutputReference" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

new datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.putMember">putMember</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resetDesignation">resetDesignation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resetMember">resetMember</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMember` <a name="putMember" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.putMember"></a>

```typescript
public putMember(value: DatazoneProjectMembershipAssignmentsMember): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.putMember.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a>

---

##### `resetDesignation` <a name="resetDesignation" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resetDesignation"></a>

```typescript
public resetDesignation(): void
```

##### `resetMember` <a name="resetMember" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resetMember"></a>

```typescript
public resetMember(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.member">member</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference">DatazoneProjectMembershipAssignmentsMemberOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.designationInput">designationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.memberInput">memberInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.designation">designation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.member"></a>

```typescript
public readonly member: DatazoneProjectMembershipAssignmentsMemberOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference">DatazoneProjectMembershipAssignmentsMemberOutputReference</a>

---

##### `designationInput`<sup>Optional</sup> <a name="designationInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.designationInput"></a>

```typescript
public readonly designationInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.memberInput"></a>

```typescript
public readonly memberInput: IResolvable | DatazoneProjectMembershipAssignmentsMember;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a>

---

##### `designation`<sup>Required</sup> <a name="designation" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.designation"></a>

```typescript
public readonly designation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectMembershipAssignments;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>

---


### DatazoneProjectResourceTagsList <a name="DatazoneProjectResourceTagsList" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

new datazoneProject.DatazoneProjectResourceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.get"></a>

```typescript
public get(index: number): DatazoneProjectResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>[]

---


### DatazoneProjectResourceTagsOutputReference <a name="DatazoneProjectResourceTagsOutputReference" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

new datazoneProject.DatazoneProjectResourceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectResourceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>

---


### DatazoneProjectUserParametersEnvironmentParametersList <a name="DatazoneProjectUserParametersEnvironmentParametersList" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

new datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.get"></a>

```typescript
public get(index: number): DatazoneProjectUserParametersEnvironmentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectUserParametersEnvironmentParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>[]

---


### DatazoneProjectUserParametersEnvironmentParametersOutputReference <a name="DatazoneProjectUserParametersEnvironmentParametersOutputReference" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

new datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectUserParametersEnvironmentParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>

---


### DatazoneProjectUserParametersList <a name="DatazoneProjectUserParametersList" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

new datazoneProject.DatazoneProjectUserParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.get"></a>

```typescript
public get(index: number): DatazoneProjectUserParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectUserParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>[]

---


### DatazoneProjectUserParametersOutputReference <a name="DatazoneProjectUserParametersOutputReference" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer"></a>

```typescript
import { datazoneProject } from '@cdktn/provider-awscc'

new datazoneProject.DatazoneProjectUserParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.putEnvironmentParameters">putEnvironmentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resetEnvironmentConfigurationName">resetEnvironmentConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resetEnvironmentId">resetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resetEnvironmentParameters">resetEnvironmentParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvironmentParameters` <a name="putEnvironmentParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.putEnvironmentParameters"></a>

```typescript
public putEnvironmentParameters(value: IResolvable | DatazoneProjectUserParametersEnvironmentParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.putEnvironmentParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>[]

---

##### `resetEnvironmentConfigurationName` <a name="resetEnvironmentConfigurationName" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resetEnvironmentConfigurationName"></a>

```typescript
public resetEnvironmentConfigurationName(): void
```

##### `resetEnvironmentId` <a name="resetEnvironmentId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resetEnvironmentId"></a>

```typescript
public resetEnvironmentId(): void
```

##### `resetEnvironmentParameters` <a name="resetEnvironmentParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resetEnvironmentParameters"></a>

```typescript
public resetEnvironmentParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentParameters">environmentParameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList">DatazoneProjectUserParametersEnvironmentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentConfigurationNameInput">environmentConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentIdInput">environmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentParametersInput">environmentParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentConfigurationName">environmentConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environmentParameters`<sup>Required</sup> <a name="environmentParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentParameters"></a>

```typescript
public readonly environmentParameters: DatazoneProjectUserParametersEnvironmentParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList">DatazoneProjectUserParametersEnvironmentParametersList</a>

---

##### `environmentConfigurationNameInput`<sup>Optional</sup> <a name="environmentConfigurationNameInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentConfigurationNameInput"></a>

```typescript
public readonly environmentConfigurationNameInput: string;
```

- *Type:* string

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentIdInput"></a>

```typescript
public readonly environmentIdInput: string;
```

- *Type:* string

---

##### `environmentParametersInput`<sup>Optional</sup> <a name="environmentParametersInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentParametersInput"></a>

```typescript
public readonly environmentParametersInput: IResolvable | DatazoneProjectUserParametersEnvironmentParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>[]

---

##### `environmentConfigurationName`<sup>Required</sup> <a name="environmentConfigurationName" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentConfigurationName"></a>

```typescript
public readonly environmentConfigurationName: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneProjectUserParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>

---



