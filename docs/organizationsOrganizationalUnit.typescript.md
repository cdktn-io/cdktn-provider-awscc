# `organizationsOrganizationalUnit` Submodule <a name="`organizationsOrganizationalUnit` Submodule" id="@cdktn/provider-awscc.organizationsOrganizationalUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationsOrganizationalUnit <a name="OrganizationsOrganizationalUnit" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/organizations_organizational_unit awscc_organizations_organizational_unit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer"></a>

```typescript
import { organizationsOrganizationalUnit } from '@cdktn/provider-awscc'

new organizationsOrganizationalUnit.OrganizationsOrganizationalUnit(scope: Construct, id: string, config: OrganizationsOrganizationalUnitConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig">OrganizationsOrganizationalUnitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig">OrganizationsOrganizationalUnitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.putTags"></a>

```typescript
public putTags(value: IResolvable | OrganizationsOrganizationalUnitTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OrganizationsOrganizationalUnit resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isConstruct"></a>

```typescript
import { organizationsOrganizationalUnit } from '@cdktn/provider-awscc'

organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformElement"></a>

```typescript
import { organizationsOrganizationalUnit } from '@cdktn/provider-awscc'

organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformResource"></a>

```typescript
import { organizationsOrganizationalUnit } from '@cdktn/provider-awscc'

organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.generateConfigForImport"></a>

```typescript
import { organizationsOrganizationalUnit } from '@cdktn/provider-awscc'

organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OrganizationsOrganizationalUnit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrganizationsOrganizationalUnit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrganizationsOrganizationalUnit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/organizations_organizational_unit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OrganizationsOrganizationalUnit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.organizationalUnitId">organizationalUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList">OrganizationsOrganizationalUnitTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentIdInput">parentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organizationalUnitId`<sup>Required</sup> <a name="organizationalUnitId" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.organizationalUnitId"></a>

```typescript
public readonly organizationalUnitId: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tags"></a>

```typescript
public readonly tags: OrganizationsOrganizationalUnitTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList">OrganizationsOrganizationalUnitTagsList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | OrganizationsOrganizationalUnitTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationsOrganizationalUnitConfig <a name="OrganizationsOrganizationalUnitConfig" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.Initializer"></a>

```typescript
import { organizationsOrganizationalUnit } from '@cdktn/provider-awscc'

const organizationsOrganizationalUnitConfig: organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.name">name</a></code> | <code>string</code> | The friendly name of this OU. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.parentId">parentId</a></code> | <code>string</code> | The unique identifier (ID) of the parent root or OU that you want to create the new OU in. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a>[]</code> | A list of tags that you want to attach to the newly created OU. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The friendly name of this OU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/organizations_organizational_unit#name OrganizationsOrganizationalUnit#name}

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

The unique identifier (ID) of the parent root or OU that you want to create the new OU in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/organizations_organizational_unit#parent_id OrganizationsOrganizationalUnit#parent_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | OrganizationsOrganizationalUnitTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a>[]

A list of tags that you want to attach to the newly created OU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/organizations_organizational_unit#tags OrganizationsOrganizationalUnit#tags}

---

### OrganizationsOrganizationalUnitTags <a name="OrganizationsOrganizationalUnitTags" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags.Initializer"></a>

```typescript
import { organizationsOrganizationalUnit } from '@cdktn/provider-awscc'

const organizationsOrganizationalUnitTags: organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags.property.key">key</a></code> | <code>string</code> | The key identifier, or name, of the tag. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags.property.value">value</a></code> | <code>string</code> | The string value that's associated with the key of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key identifier, or name, of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/organizations_organizational_unit#key OrganizationsOrganizationalUnit#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The string value that's associated with the key of the tag.

You can set the value of a tag to an empty string, but you can't set the value of a tag to null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/organizations_organizational_unit#value OrganizationsOrganizationalUnit#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationsOrganizationalUnitTagsList <a name="OrganizationsOrganizationalUnitTagsList" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.Initializer"></a>

```typescript
import { organizationsOrganizationalUnit } from '@cdktn/provider-awscc'

new organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.get"></a>

```typescript
public get(index: number): OrganizationsOrganizationalUnitTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrganizationsOrganizationalUnitTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a>[]

---


### OrganizationsOrganizationalUnitTagsOutputReference <a name="OrganizationsOrganizationalUnitTagsOutputReference" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.Initializer"></a>

```typescript
import { organizationsOrganizationalUnit } from '@cdktn/provider-awscc'

new organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrganizationsOrganizationalUnitTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a>

---



