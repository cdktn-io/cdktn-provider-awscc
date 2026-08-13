# `lakeformationPrincipalPermissions` Submodule <a name="`lakeformationPrincipalPermissions` Submodule" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationPrincipalPermissions <a name="LakeformationPrincipalPermissions" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions awscc_lakeformation_principal_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new lakeformationPrincipalPermissions.LakeformationPrincipalPermissions(scope: Construct, id: string, config: LakeformationPrincipalPermissionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig">LakeformationPrincipalPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig">LakeformationPrincipalPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putResource">putResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.resetCatalog">resetCatalog</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPrincipal` <a name="putPrincipal" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putPrincipal"></a>

```typescript
public putPrincipal(value: LakeformationPrincipalPermissionsPrincipal): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a>

---

##### `putResource` <a name="putResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putResource"></a>

```typescript
public putResource(value: LakeformationPrincipalPermissionsResource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a>

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LakeformationPrincipalPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isConstruct"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformElement"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformResource"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LakeformationPrincipalPermissions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakeformationPrincipalPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakeformationPrincipalPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LakeformationPrincipalPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference">LakeformationPrincipalPermissionsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principalIdentifier">principalIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference">LakeformationPrincipalPermissionsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsInput">permissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsWithGrantOptionInput">permissionsWithGrantOptionInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principalInput">principalInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resourceInput">resourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsWithGrantOption">permissionsWithGrantOption</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principal"></a>

```typescript
public readonly principal: LakeformationPrincipalPermissionsPrincipalOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference">LakeformationPrincipalPermissionsPrincipalOutputReference</a>

---

##### `principalIdentifier`<sup>Required</sup> <a name="principalIdentifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principalIdentifier"></a>

```typescript
public readonly principalIdentifier: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resource"></a>

```typescript
public readonly resource: LakeformationPrincipalPermissionsResourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference">LakeformationPrincipalPermissionsResourceOutputReference</a>

---

##### `resourceIdentifier`<sup>Required</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string[];
```

- *Type:* string[]

---

##### `permissionsWithGrantOptionInput`<sup>Optional</sup> <a name="permissionsWithGrantOptionInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsWithGrantOptionInput"></a>

```typescript
public readonly permissionsWithGrantOptionInput: string[];
```

- *Type:* string[]

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principalInput"></a>

```typescript
public readonly principalInput: IResolvable | LakeformationPrincipalPermissionsPrincipal;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a>

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resourceInput"></a>

```typescript
public readonly resourceInput: IResolvable | LakeformationPrincipalPermissionsResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `permissionsWithGrantOption`<sup>Required</sup> <a name="permissionsWithGrantOption" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsWithGrantOption"></a>

```typescript
public readonly permissionsWithGrantOption: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationPrincipalPermissionsConfig <a name="LakeformationPrincipalPermissionsConfig" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const lakeformationPrincipalPermissionsConfig: lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.permissions">permissions</a></code> | <code>string[]</code> | The permissions granted or revoked. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.permissionsWithGrantOption">permissionsWithGrantOption</a></code> | <code>string[]</code> | Indicates the ability to grant permissions (as a subset of permissions granted). |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a></code> | The principal to be granted a permission. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a></code> | The resource to be granted or revoked permissions. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.catalog">catalog</a></code> | <code>string</code> | The identifier for the GLUDC. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

The permissions granted or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#permissions LakeformationPrincipalPermissions#permissions}

---

##### `permissionsWithGrantOption`<sup>Required</sup> <a name="permissionsWithGrantOption" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.permissionsWithGrantOption"></a>

```typescript
public readonly permissionsWithGrantOption: string[];
```

- *Type:* string[]

Indicates the ability to grant permissions (as a subset of permissions granted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#permissions_with_grant_option LakeformationPrincipalPermissions#permissions_with_grant_option}

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.principal"></a>

```typescript
public readonly principal: LakeformationPrincipalPermissionsPrincipal;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a>

The principal to be granted a permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#principal LakeformationPrincipalPermissions#principal}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.resource"></a>

```typescript
public readonly resource: LakeformationPrincipalPermissionsResource;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a>

The resource to be granted or revoked permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#resource LakeformationPrincipalPermissions#resource}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The identifier for the GLUDC.

By default, the account ID. The GLUDC is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog LakeformationPrincipalPermissions#catalog}

---

### LakeformationPrincipalPermissionsPrincipal <a name="LakeformationPrincipalPermissionsPrincipal" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const lakeformationPrincipalPermissionsPrincipal: lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>string</code> | An identifier for the LFlong principal. |

---

##### `dataLakePrincipalIdentifier`<sup>Optional</sup> <a name="dataLakePrincipalIdentifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal.property.dataLakePrincipalIdentifier"></a>

```typescript
public readonly dataLakePrincipalIdentifier: string;
```

- *Type:* string

An identifier for the LFlong principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#data_lake_principal_identifier LakeformationPrincipalPermissions#data_lake_principal_identifier}

---

### LakeformationPrincipalPermissionsResource <a name="LakeformationPrincipalPermissionsResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const lakeformationPrincipalPermissionsResource: lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.catalog">catalog</a></code> | <code>string</code> | The identifier for the Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.database">database</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a></code> | The database for the resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.dataCellsFilter">dataCellsFilter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a></code> | A data cell filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.dataLocation">dataLocation</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a></code> | The location of an Amazon S3 path where permissions are granted or revoked. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.lfTag">lfTag</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a></code> | The LF-tag key and values attached to a resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.lfTagPolicy">lfTagPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a></code> | A list of LF-tag conditions that define a resource's LF-tag policy. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.table">table</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a></code> | The table for the resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a></code> | The table with columns for the resource. |

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The identifier for the Data Catalog.

By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your LFlong environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog LakeformationPrincipalPermissions#catalog}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.database"></a>

```typescript
public readonly database: LakeformationPrincipalPermissionsResourceDatabase;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a>

The database for the resource.

Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#database LakeformationPrincipalPermissions#database}

---

##### `dataCellsFilter`<sup>Optional</sup> <a name="dataCellsFilter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.dataCellsFilter"></a>

```typescript
public readonly dataCellsFilter: LakeformationPrincipalPermissionsResourceDataCellsFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a>

A data cell filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#data_cells_filter LakeformationPrincipalPermissions#data_cells_filter}

---

##### `dataLocation`<sup>Optional</sup> <a name="dataLocation" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.dataLocation"></a>

```typescript
public readonly dataLocation: LakeformationPrincipalPermissionsResourceDataLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a>

The location of an Amazon S3 path where permissions are granted or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#data_location LakeformationPrincipalPermissions#data_location}

---

##### `lfTag`<sup>Optional</sup> <a name="lfTag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.lfTag"></a>

```typescript
public readonly lfTag: LakeformationPrincipalPermissionsResourceLfTag;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a>

The LF-tag key and values attached to a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#lf_tag LakeformationPrincipalPermissions#lf_tag}

---

##### `lfTagPolicy`<sup>Optional</sup> <a name="lfTagPolicy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.lfTagPolicy"></a>

```typescript
public readonly lfTagPolicy: LakeformationPrincipalPermissionsResourceLfTagPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a>

A list of LF-tag conditions that define a resource's LF-tag policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#lf_tag_policy LakeformationPrincipalPermissions#lf_tag_policy}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.table"></a>

```typescript
public readonly table: LakeformationPrincipalPermissionsResourceTable;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a>

The table for the resource.

A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table LakeformationPrincipalPermissions#table}

---

##### `tableWithColumns`<sup>Optional</sup> <a name="tableWithColumns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.tableWithColumns"></a>

```typescript
public readonly tableWithColumns: LakeformationPrincipalPermissionsResourceTableWithColumns;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a>

The table with columns for the resource.

A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table_with_columns LakeformationPrincipalPermissions#table_with_columns}

---

### LakeformationPrincipalPermissionsResourceDatabase <a name="LakeformationPrincipalPermissionsResourceDatabase" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const lakeformationPrincipalPermissionsResourceDatabase: lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.property.catalogId">catalogId</a></code> | <code>string</code> | The identifier for the Data Catalog. By default, it is the account ID of the caller. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.property.name">name</a></code> | <code>string</code> | The name of the database resource. Unique to the Data Catalog. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

The identifier for the Data Catalog. By default, it is the account ID of the caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the database resource. Unique to the Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

### LakeformationPrincipalPermissionsResourceDataCellsFilter <a name="LakeformationPrincipalPermissionsResourceDataCellsFilter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const lakeformationPrincipalPermissionsResourceDataCellsFilter: lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.databaseName">databaseName</a></code> | <code>string</code> | A database in the GLUDC. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.name">name</a></code> | <code>string</code> | The name given by the user to the data filter cell. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.tableCatalogId">tableCatalogId</a></code> | <code>string</code> | The ID of the catalog to which the table belongs. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.tableName">tableName</a></code> | <code>string</code> | The name of the table. |

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

A database in the GLUDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#database_name LakeformationPrincipalPermissions#database_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name given by the user to the data filter cell.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

##### `tableCatalogId`<sup>Optional</sup> <a name="tableCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.tableCatalogId"></a>

```typescript
public readonly tableCatalogId: string;
```

- *Type:* string

The ID of the catalog to which the table belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table_catalog_id LakeformationPrincipalPermissions#table_catalog_id}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table_name LakeformationPrincipalPermissions#table_name}

---

### LakeformationPrincipalPermissionsResourceDataLocation <a name="LakeformationPrincipalPermissionsResourceDataLocation" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const lakeformationPrincipalPermissionsResourceDataLocation: lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.property.catalogId">catalogId</a></code> | <code>string</code> | The identifier for the GLUDC where the location is registered with LFlong. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.property.resourceArn">resourceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) that uniquely identifies the data location resource. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

The identifier for the GLUDC where the location is registered with LFlong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `resourceArn`<sup>Optional</sup> <a name="resourceArn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) that uniquely identifies the data location resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#resource_arn LakeformationPrincipalPermissions#resource_arn}

---

### LakeformationPrincipalPermissionsResourceLfTag <a name="LakeformationPrincipalPermissionsResourceLfTag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const lakeformationPrincipalPermissionsResourceLfTag: lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.catalogId">catalogId</a></code> | <code>string</code> | The identifier for the GLUDC where the location is registered with GLUDC. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.tagKey">tagKey</a></code> | <code>string</code> | The key-name for the LF-tag. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.tagValues">tagValues</a></code> | <code>string[]</code> | A list of possible values for the corresponding ``TagKey`` of an LF-tag key-value pair. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

The identifier for the GLUDC where the location is registered with GLUDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

The key-name for the LF-tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#tag_key LakeformationPrincipalPermissions#tag_key}

---

##### `tagValues`<sup>Optional</sup> <a name="tagValues" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.tagValues"></a>

```typescript
public readonly tagValues: string[];
```

- *Type:* string[]

A list of possible values for the corresponding ``TagKey`` of an LF-tag key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#tag_values LakeformationPrincipalPermissions#tag_values}

---

### LakeformationPrincipalPermissionsResourceLfTagPolicy <a name="LakeformationPrincipalPermissionsResourceLfTagPolicy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const lakeformationPrincipalPermissionsResourceLfTagPolicy: lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.catalogId">catalogId</a></code> | <code>string</code> | The identifier for the GLUDC. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.expression">expression</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>[]</code> | A list of LF-tag conditions that apply to the resource's LF-tag policy. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.resourceType">resourceType</a></code> | <code>string</code> | The resource type for which the LF-tag policy applies. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

The identifier for the GLUDC.

The GLUDC is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your LFlong environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.expression"></a>

```typescript
public readonly expression: IResolvable | LakeformationPrincipalPermissionsResourceLfTagPolicyExpression[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>[]

A list of LF-tag conditions that apply to the resource's LF-tag policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#expression LakeformationPrincipalPermissions#expression}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The resource type for which the LF-tag policy applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#resource_type LakeformationPrincipalPermissions#resource_type}

---

### LakeformationPrincipalPermissionsResourceLfTagPolicyExpression <a name="LakeformationPrincipalPermissionsResourceLfTagPolicyExpression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const lakeformationPrincipalPermissionsResourceLfTagPolicyExpression: lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.property.tagKey">tagKey</a></code> | <code>string</code> | The key-name for the LF-tag. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.property.tagValues">tagValues</a></code> | <code>string[]</code> | A list of possible values of the corresponding ``TagKey`` of an LF-tag key-value pair. |

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

The key-name for the LF-tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#tag_key LakeformationPrincipalPermissions#tag_key}

---

##### `tagValues`<sup>Optional</sup> <a name="tagValues" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.property.tagValues"></a>

```typescript
public readonly tagValues: string[];
```

- *Type:* string[]

A list of possible values of the corresponding ``TagKey`` of an LF-tag key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#tag_values LakeformationPrincipalPermissions#tag_values}

---

### LakeformationPrincipalPermissionsResourceTable <a name="LakeformationPrincipalPermissionsResourceTable" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const lakeformationPrincipalPermissionsResourceTable: lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.catalogId">catalogId</a></code> | <code>string</code> | The identifier for the Data Catalog. By default, it is the account ID of the caller. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database for the table. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.name">name</a></code> | <code>string</code> | The name of the table. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.tableWildcard">tableWildcard</a></code> | <code>string</code> | A wildcard object representing every table under a database.  At least one of ``TableResource$Name`` or ``TableResource$TableWildcard`` is required. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

The identifier for the Data Catalog. By default, it is the account ID of the caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database for the table.

Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#database_name LakeformationPrincipalPermissions#database_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

##### `tableWildcard`<sup>Optional</sup> <a name="tableWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.tableWildcard"></a>

```typescript
public readonly tableWildcard: string;
```

- *Type:* string

A wildcard object representing every table under a database.  At least one of ``TableResource$Name`` or ``TableResource$TableWildcard`` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table_wildcard LakeformationPrincipalPermissions#table_wildcard}

---

### LakeformationPrincipalPermissionsResourceTableWithColumns <a name="LakeformationPrincipalPermissionsResourceTableWithColumns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const lakeformationPrincipalPermissionsResourceTableWithColumns: lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.catalogId">catalogId</a></code> | <code>string</code> | The identifier for the GLUDC where the location is registered with LFlong. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.columnNames">columnNames</a></code> | <code>string[]</code> | The list of column names for the table. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.columnWildcard">columnWildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a></code> | A wildcard specified by a ``ColumnWildcard`` object. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database for the table with columns resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.name">name</a></code> | <code>string</code> | The name of the table resource. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

The identifier for the GLUDC where the location is registered with LFlong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

The list of column names for the table. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#column_names LakeformationPrincipalPermissions#column_names}

---

##### `columnWildcard`<sup>Optional</sup> <a name="columnWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.columnWildcard"></a>

```typescript
public readonly columnWildcard: LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a>

A wildcard specified by a ``ColumnWildcard`` object. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#column_wildcard LakeformationPrincipalPermissions#column_wildcard}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database for the table with columns resource.

Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#database_name LakeformationPrincipalPermissions#database_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the table resource.

A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

### LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard <a name="LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const lakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard: lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard.property.excludedColumnNames">excludedColumnNames</a></code> | <code>string[]</code> | Excludes column names. Any column with this name will be excluded. |

---

##### `excludedColumnNames`<sup>Optional</sup> <a name="excludedColumnNames" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard.property.excludedColumnNames"></a>

```typescript
public readonly excludedColumnNames: string[];
```

- *Type:* string[]

Excludes column names. Any column with this name will be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#excluded_column_names LakeformationPrincipalPermissions#excluded_column_names}

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationPrincipalPermissionsPrincipalOutputReference <a name="LakeformationPrincipalPermissionsPrincipalOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier">resetDataLakePrincipalIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataLakePrincipalIdentifier` <a name="resetDataLakePrincipalIdentifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier"></a>

```typescript
public resetDataLakePrincipalIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">dataLakePrincipalIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataLakePrincipalIdentifierInput`<sup>Optional</sup> <a name="dataLakePrincipalIdentifierInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```typescript
public readonly dataLakePrincipalIdentifierInput: string;
```

- *Type:* string

---

##### `dataLakePrincipalIdentifier`<sup>Required</sup> <a name="dataLakePrincipalIdentifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```typescript
public readonly dataLakePrincipalIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationPrincipalPermissionsPrincipal;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a>

---


### LakeformationPrincipalPermissionsResourceDatabaseOutputReference <a name="LakeformationPrincipalPermissionsResourceDatabaseOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationPrincipalPermissionsResourceDatabase;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a>

---


### LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference <a name="LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetTableCatalogId">resetTableCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTableCatalogId` <a name="resetTableCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetTableCatalogId"></a>

```typescript
public resetTableCatalogId(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogIdInput">tableCatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogId">tableCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tableCatalogIdInput`<sup>Optional</sup> <a name="tableCatalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogIdInput"></a>

```typescript
public readonly tableCatalogIdInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tableCatalogId`<sup>Required</sup> <a name="tableCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogId"></a>

```typescript
public readonly tableCatalogId: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationPrincipalPermissionsResourceDataCellsFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a>

---


### LakeformationPrincipalPermissionsResourceDataLocationOutputReference <a name="LakeformationPrincipalPermissionsResourceDataLocationOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resetResourceArn">resetResourceArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetResourceArn` <a name="resetResourceArn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resetResourceArn"></a>

```typescript
public resetResourceArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationPrincipalPermissionsResourceDataLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a>

---


### LakeformationPrincipalPermissionsResourceLfTagOutputReference <a name="LakeformationPrincipalPermissionsResourceLfTagOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetTagValues">resetTagValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValues` <a name="resetTagValues" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetTagValues"></a>

```typescript
public resetTagValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValuesInput">tagValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValues">tagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValuesInput`<sup>Optional</sup> <a name="tagValuesInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValuesInput"></a>

```typescript
public readonly tagValuesInput: string[];
```

- *Type:* string[]

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValues"></a>

```typescript
public readonly tagValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationPrincipalPermissionsResourceLfTag;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a>

---


### LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList <a name="LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get"></a>

```typescript
public get(index: number): LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationPrincipalPermissionsResourceLfTagPolicyExpression[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>[]

---


### LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference <a name="LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resetTagValues">resetTagValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTagKey` <a name="resetTagKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValues` <a name="resetTagValues" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resetTagValues"></a>

```typescript
public resetTagValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValuesInput">tagValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValues">tagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValuesInput`<sup>Optional</sup> <a name="tagValuesInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValuesInput"></a>

```typescript
public readonly tagValuesInput: string[];
```

- *Type:* string[]

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValues"></a>

```typescript
public readonly tagValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationPrincipalPermissionsResourceLfTagPolicyExpression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>

---


### LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference <a name="LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.putExpression">putExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpression` <a name="putExpression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.putExpression"></a>

```typescript
public putExpression(value: IResolvable | LakeformationPrincipalPermissionsResourceLfTagPolicyExpression[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.putExpression.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>[]

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetResourceType"></a>

```typescript
public resetResourceType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expression">expression</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList">LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expressionInput">expressionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expression"></a>

```typescript
public readonly expression: LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList">LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: IResolvable | LakeformationPrincipalPermissionsResourceLfTagPolicyExpression[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>[]

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationPrincipalPermissionsResourceLfTagPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a>

---


### LakeformationPrincipalPermissionsResourceOutputReference <a name="LakeformationPrincipalPermissionsResourceOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataCellsFilter">putDataCellsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataLocation">putDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTag">putLfTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTagPolicy">putLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTableWithColumns">putTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDataCellsFilter">resetDataCellsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDataLocation">resetDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetLfTag">resetLfTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetLfTagPolicy">resetLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetTableWithColumns">resetTableWithColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabase` <a name="putDatabase" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDatabase"></a>

```typescript
public putDatabase(value: LakeformationPrincipalPermissionsResourceDatabase): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a>

---

##### `putDataCellsFilter` <a name="putDataCellsFilter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataCellsFilter"></a>

```typescript
public putDataCellsFilter(value: LakeformationPrincipalPermissionsResourceDataCellsFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataCellsFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a>

---

##### `putDataLocation` <a name="putDataLocation" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataLocation"></a>

```typescript
public putDataLocation(value: LakeformationPrincipalPermissionsResourceDataLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a>

---

##### `putLfTag` <a name="putLfTag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTag"></a>

```typescript
public putLfTag(value: LakeformationPrincipalPermissionsResourceLfTag): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTag.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a>

---

##### `putLfTagPolicy` <a name="putLfTagPolicy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTagPolicy"></a>

```typescript
public putLfTagPolicy(value: LakeformationPrincipalPermissionsResourceLfTagPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTagPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a>

---

##### `putTable` <a name="putTable" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTable"></a>

```typescript
public putTable(value: LakeformationPrincipalPermissionsResourceTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a>

---

##### `putTableWithColumns` <a name="putTableWithColumns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTableWithColumns"></a>

```typescript
public putTableWithColumns(value: LakeformationPrincipalPermissionsResourceTableWithColumns): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTableWithColumns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a>

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetDataCellsFilter` <a name="resetDataCellsFilter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDataCellsFilter"></a>

```typescript
public resetDataCellsFilter(): void
```

##### `resetDataLocation` <a name="resetDataLocation" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDataLocation"></a>

```typescript
public resetDataLocation(): void
```

##### `resetLfTag` <a name="resetLfTag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetLfTag"></a>

```typescript
public resetLfTag(): void
```

##### `resetLfTagPolicy` <a name="resetLfTagPolicy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetLfTagPolicy"></a>

```typescript
public resetLfTagPolicy(): void
```

##### `resetTable` <a name="resetTable" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetTable"></a>

```typescript
public resetTable(): void
```

##### `resetTableWithColumns` <a name="resetTableWithColumns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetTableWithColumns"></a>

```typescript
public resetTableWithColumns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.database">database</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference">LakeformationPrincipalPermissionsResourceDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilter">dataCellsFilter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference">LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataLocation">dataLocation</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference">LakeformationPrincipalPermissionsResourceDataLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTag">lfTag</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference">LakeformationPrincipalPermissionsResourceLfTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicy">lfTagPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference">LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.table">table</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference">LakeformationPrincipalPermissionsResourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference">LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.databaseInput">databaseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilterInput">dataCellsFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataLocationInput">dataLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagInput">lfTagInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicyInput">lfTagPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableInput">tableInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumnsInput">tableWithColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.database"></a>

```typescript
public readonly database: LakeformationPrincipalPermissionsResourceDatabaseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference">LakeformationPrincipalPermissionsResourceDatabaseOutputReference</a>

---

##### `dataCellsFilter`<sup>Required</sup> <a name="dataCellsFilter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilter"></a>

```typescript
public readonly dataCellsFilter: LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference">LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference</a>

---

##### `dataLocation`<sup>Required</sup> <a name="dataLocation" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataLocation"></a>

```typescript
public readonly dataLocation: LakeformationPrincipalPermissionsResourceDataLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference">LakeformationPrincipalPermissionsResourceDataLocationOutputReference</a>

---

##### `lfTag`<sup>Required</sup> <a name="lfTag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTag"></a>

```typescript
public readonly lfTag: LakeformationPrincipalPermissionsResourceLfTagOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference">LakeformationPrincipalPermissionsResourceLfTagOutputReference</a>

---

##### `lfTagPolicy`<sup>Required</sup> <a name="lfTagPolicy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicy"></a>

```typescript
public readonly lfTagPolicy: LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference">LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.table"></a>

```typescript
public readonly table: LakeformationPrincipalPermissionsResourceTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference">LakeformationPrincipalPermissionsResourceTableOutputReference</a>

---

##### `tableWithColumns`<sup>Required</sup> <a name="tableWithColumns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumns"></a>

```typescript
public readonly tableWithColumns: LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference">LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: IResolvable | LakeformationPrincipalPermissionsResourceDatabase;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a>

---

##### `dataCellsFilterInput`<sup>Optional</sup> <a name="dataCellsFilterInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilterInput"></a>

```typescript
public readonly dataCellsFilterInput: IResolvable | LakeformationPrincipalPermissionsResourceDataCellsFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a>

---

##### `dataLocationInput`<sup>Optional</sup> <a name="dataLocationInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataLocationInput"></a>

```typescript
public readonly dataLocationInput: IResolvable | LakeformationPrincipalPermissionsResourceDataLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a>

---

##### `lfTagInput`<sup>Optional</sup> <a name="lfTagInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagInput"></a>

```typescript
public readonly lfTagInput: IResolvable | LakeformationPrincipalPermissionsResourceLfTag;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a>

---

##### `lfTagPolicyInput`<sup>Optional</sup> <a name="lfTagPolicyInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicyInput"></a>

```typescript
public readonly lfTagPolicyInput: IResolvable | LakeformationPrincipalPermissionsResourceLfTagPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a>

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableInput"></a>

```typescript
public readonly tableInput: IResolvable | LakeformationPrincipalPermissionsResourceTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a>

---

##### `tableWithColumnsInput`<sup>Optional</sup> <a name="tableWithColumnsInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumnsInput"></a>

```typescript
public readonly tableWithColumnsInput: IResolvable | LakeformationPrincipalPermissionsResourceTableWithColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationPrincipalPermissionsResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a>

---


### LakeformationPrincipalPermissionsResourceTableOutputReference <a name="LakeformationPrincipalPermissionsResourceTableOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetTableWildcard">resetTableWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTableWildcard` <a name="resetTableWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetTableWildcard"></a>

```typescript
public resetTableWildcard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcardInput">tableWildcardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcard">tableWildcard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tableWildcardInput`<sup>Optional</sup> <a name="tableWildcardInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcardInput"></a>

```typescript
public readonly tableWildcardInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tableWildcard`<sup>Required</sup> <a name="tableWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcard"></a>

```typescript
public readonly tableWildcard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationPrincipalPermissionsResourceTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a>

---


### LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference <a name="LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resetExcludedColumnNames">resetExcludedColumnNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedColumnNames` <a name="resetExcludedColumnNames" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resetExcludedColumnNames"></a>

```typescript
public resetExcludedColumnNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNamesInput">excludedColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames">excludedColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludedColumnNamesInput`<sup>Optional</sup> <a name="excludedColumnNamesInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNamesInput"></a>

```typescript
public readonly excludedColumnNamesInput: string[];
```

- *Type:* string[]

---

##### `excludedColumnNames`<sup>Required</sup> <a name="excludedColumnNames" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames"></a>

```typescript
public readonly excludedColumnNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a>

---


### LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference <a name="LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer"></a>

```typescript
import { lakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.putColumnWildcard">putColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetColumnWildcard">resetColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnWildcard` <a name="putColumnWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.putColumnWildcard"></a>

```typescript
public putColumnWildcard(value: LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.putColumnWildcard.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a>

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetColumnNames"></a>

```typescript
public resetColumnNames(): void
```

##### `resetColumnWildcard` <a name="resetColumnWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetColumnWildcard"></a>

```typescript
public resetColumnWildcard(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcard">columnWildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNamesInput">columnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcardInput">columnWildcardInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNames">columnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnWildcard`<sup>Required</sup> <a name="columnWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcard"></a>

```typescript
public readonly columnWildcard: LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNamesInput"></a>

```typescript
public readonly columnNamesInput: string[];
```

- *Type:* string[]

---

##### `columnWildcardInput`<sup>Optional</sup> <a name="columnWildcardInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcardInput"></a>

```typescript
public readonly columnWildcardInput: IResolvable | LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationPrincipalPermissionsResourceTableWithColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a>

---



