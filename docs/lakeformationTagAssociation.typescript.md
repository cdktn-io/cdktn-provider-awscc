# `lakeformationTagAssociation` Submodule <a name="`lakeformationTagAssociation` Submodule" id="@cdktn/provider-awscc.lakeformationTagAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationTagAssociation <a name="LakeformationTagAssociation" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association awscc_lakeformation_tag_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer"></a>

```typescript
import { lakeformationTagAssociation } from '@cdktn/provider-awscc'

new lakeformationTagAssociation.LakeformationTagAssociation(scope: Construct, id: string, config: LakeformationTagAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig">LakeformationTagAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig">LakeformationTagAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putLfTags">putLfTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putResource">putResource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLfTags` <a name="putLfTags" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putLfTags"></a>

```typescript
public putLfTags(value: IResolvable | LakeformationTagAssociationLfTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putLfTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>[]

---

##### `putResource` <a name="putResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putResource"></a>

```typescript
public putResource(value: LakeformationTagAssociationResource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LakeformationTagAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isConstruct"></a>

```typescript
import { lakeformationTagAssociation } from '@cdktn/provider-awscc'

lakeformationTagAssociation.LakeformationTagAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformElement"></a>

```typescript
import { lakeformationTagAssociation } from '@cdktn/provider-awscc'

lakeformationTagAssociation.LakeformationTagAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformResource"></a>

```typescript
import { lakeformationTagAssociation } from '@cdktn/provider-awscc'

lakeformationTagAssociation.LakeformationTagAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport"></a>

```typescript
import { lakeformationTagAssociation } from '@cdktn/provider-awscc'

lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LakeformationTagAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakeformationTagAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakeformationTagAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LakeformationTagAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lfTags">lfTags</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList">LakeformationTagAssociationLfTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference">LakeformationTagAssociationResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.tagsIdentifier">tagsIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lfTagsInput">lfTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resourceInput">resourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lfTags`<sup>Required</sup> <a name="lfTags" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lfTags"></a>

```typescript
public readonly lfTags: LakeformationTagAssociationLfTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList">LakeformationTagAssociationLfTagsList</a>

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resource"></a>

```typescript
public readonly resource: LakeformationTagAssociationResourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference">LakeformationTagAssociationResourceOutputReference</a>

---

##### `resourceIdentifier`<sup>Required</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

---

##### `tagsIdentifier`<sup>Required</sup> <a name="tagsIdentifier" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.tagsIdentifier"></a>

```typescript
public readonly tagsIdentifier: string;
```

- *Type:* string

---

##### `lfTagsInput`<sup>Optional</sup> <a name="lfTagsInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lfTagsInput"></a>

```typescript
public readonly lfTagsInput: IResolvable | LakeformationTagAssociationLfTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>[]

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resourceInput"></a>

```typescript
public readonly resourceInput: IResolvable | LakeformationTagAssociationResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationTagAssociationConfig <a name="LakeformationTagAssociationConfig" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.Initializer"></a>

```typescript
import { lakeformationTagAssociation } from '@cdktn/provider-awscc'

const lakeformationTagAssociationConfig: lakeformationTagAssociation.LakeformationTagAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.lfTags">lfTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>[]</code> | List of Lake Formation Tags to associate with the Lake Formation Resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a></code> | Resource to tag with the Lake Formation Tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `lfTags`<sup>Required</sup> <a name="lfTags" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.lfTags"></a>

```typescript
public readonly lfTags: IResolvable | LakeformationTagAssociationLfTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>[]

List of Lake Formation Tags to associate with the Lake Formation Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#lf_tags LakeformationTagAssociation#lf_tags}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.resource"></a>

```typescript
public readonly resource: LakeformationTagAssociationResource;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a>

Resource to tag with the Lake Formation Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#resource LakeformationTagAssociation#resource}

---

### LakeformationTagAssociationLfTags <a name="LakeformationTagAssociationLfTags" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.Initializer"></a>

```typescript
import { lakeformationTagAssociation } from '@cdktn/provider-awscc'

const lakeformationTagAssociationLfTags: lakeformationTagAssociation.LakeformationTagAssociationLfTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#tag_key LakeformationTagAssociation#tag_key}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.tagValues">tagValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#tag_values LakeformationTagAssociation#tag_values}. |

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}.

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#tag_key LakeformationTagAssociation#tag_key}.

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.tagValues"></a>

```typescript
public readonly tagValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#tag_values LakeformationTagAssociation#tag_values}.

---

### LakeformationTagAssociationResource <a name="LakeformationTagAssociationResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.Initializer"></a>

```typescript
import { lakeformationTagAssociation } from '@cdktn/provider-awscc'

const lakeformationTagAssociationResource: lakeformationTagAssociation.LakeformationTagAssociationResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.catalog">catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog LakeformationTagAssociation#catalog}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.database">database</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database LakeformationTagAssociation#database}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.table">table</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table LakeformationTagAssociation#table}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table_with_columns LakeformationTagAssociation#table_with_columns}. |

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog LakeformationTagAssociation#catalog}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.database"></a>

```typescript
public readonly database: LakeformationTagAssociationResourceDatabase;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database LakeformationTagAssociation#database}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.table"></a>

```typescript
public readonly table: LakeformationTagAssociationResourceTable;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table LakeformationTagAssociation#table}.

---

##### `tableWithColumns`<sup>Optional</sup> <a name="tableWithColumns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.tableWithColumns"></a>

```typescript
public readonly tableWithColumns: LakeformationTagAssociationResourceTableWithColumns;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table_with_columns LakeformationTagAssociation#table_with_columns}.

---

### LakeformationTagAssociationResourceDatabase <a name="LakeformationTagAssociationResourceDatabase" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.Initializer"></a>

```typescript
import { lakeformationTagAssociation } from '@cdktn/provider-awscc'

const lakeformationTagAssociationResourceDatabase: lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}.

---

### LakeformationTagAssociationResourceTable <a name="LakeformationTagAssociationResourceTable" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.Initializer"></a>

```typescript
import { lakeformationTagAssociation } from '@cdktn/provider-awscc'

const lakeformationTagAssociationResourceTable: lakeformationTagAssociation.LakeformationTagAssociationResourceTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database_name LakeformationTagAssociation#database_name}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.tableWildcard">tableWildcard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table_wildcard LakeformationTagAssociation#table_wildcard}. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database_name LakeformationTagAssociation#database_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}.

---

##### `tableWildcard`<sup>Optional</sup> <a name="tableWildcard" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.tableWildcard"></a>

```typescript
public readonly tableWildcard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table_wildcard LakeformationTagAssociation#table_wildcard}.

---

### LakeformationTagAssociationResourceTableWithColumns <a name="LakeformationTagAssociationResourceTableWithColumns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.Initializer"></a>

```typescript
import { lakeformationTagAssociation } from '@cdktn/provider-awscc'

const lakeformationTagAssociationResourceTableWithColumns: lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.columnNames">columnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#column_names LakeformationTagAssociation#column_names}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database_name LakeformationTagAssociation#database_name}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}.

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#column_names LakeformationTagAssociation#column_names}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database_name LakeformationTagAssociation#database_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationTagAssociationLfTagsList <a name="LakeformationTagAssociationLfTagsList" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer"></a>

```typescript
import { lakeformationTagAssociation } from '@cdktn/provider-awscc'

new lakeformationTagAssociation.LakeformationTagAssociationLfTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.get"></a>

```typescript
public get(index: number): LakeformationTagAssociationLfTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationTagAssociationLfTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>[]

---


### LakeformationTagAssociationLfTagsOutputReference <a name="LakeformationTagAssociationLfTagsOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer"></a>

```typescript
import { lakeformationTagAssociation } from '@cdktn/provider-awscc'

new lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagValuesInput">tagValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagValues">tagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValuesInput`<sup>Optional</sup> <a name="tagValuesInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagValuesInput"></a>

```typescript
public readonly tagValuesInput: string[];
```

- *Type:* string[]

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagValues"></a>

```typescript
public readonly tagValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationTagAssociationLfTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>

---


### LakeformationTagAssociationResourceDatabaseOutputReference <a name="LakeformationTagAssociationResourceDatabaseOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer"></a>

```typescript
import { lakeformationTagAssociation } from '@cdktn/provider-awscc'

new lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationTagAssociationResourceDatabase;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a>

---


### LakeformationTagAssociationResourceOutputReference <a name="LakeformationTagAssociationResourceOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer"></a>

```typescript
import { lakeformationTagAssociation } from '@cdktn/provider-awscc'

new lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTableWithColumns">putTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetTableWithColumns">resetTableWithColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabase` <a name="putDatabase" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putDatabase"></a>

```typescript
public putDatabase(value: LakeformationTagAssociationResourceDatabase): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a>

---

##### `putTable` <a name="putTable" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTable"></a>

```typescript
public putTable(value: LakeformationTagAssociationResourceTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a>

---

##### `putTableWithColumns` <a name="putTableWithColumns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTableWithColumns"></a>

```typescript
public putTableWithColumns(value: LakeformationTagAssociationResourceTableWithColumns): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTableWithColumns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a>

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetTable` <a name="resetTable" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetTable"></a>

```typescript
public resetTable(): void
```

##### `resetTableWithColumns` <a name="resetTableWithColumns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetTableWithColumns"></a>

```typescript
public resetTableWithColumns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.database">database</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference">LakeformationTagAssociationResourceDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.table">table</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference">LakeformationTagAssociationResourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference">LakeformationTagAssociationResourceTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.databaseInput">databaseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableInput">tableInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableWithColumnsInput">tableWithColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.database"></a>

```typescript
public readonly database: LakeformationTagAssociationResourceDatabaseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference">LakeformationTagAssociationResourceDatabaseOutputReference</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.table"></a>

```typescript
public readonly table: LakeformationTagAssociationResourceTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference">LakeformationTagAssociationResourceTableOutputReference</a>

---

##### `tableWithColumns`<sup>Required</sup> <a name="tableWithColumns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableWithColumns"></a>

```typescript
public readonly tableWithColumns: LakeformationTagAssociationResourceTableWithColumnsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference">LakeformationTagAssociationResourceTableWithColumnsOutputReference</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: IResolvable | LakeformationTagAssociationResourceDatabase;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a>

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableInput"></a>

```typescript
public readonly tableInput: IResolvable | LakeformationTagAssociationResourceTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a>

---

##### `tableWithColumnsInput`<sup>Optional</sup> <a name="tableWithColumnsInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableWithColumnsInput"></a>

```typescript
public readonly tableWithColumnsInput: IResolvable | LakeformationTagAssociationResourceTableWithColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationTagAssociationResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a>

---


### LakeformationTagAssociationResourceTableOutputReference <a name="LakeformationTagAssociationResourceTableOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer"></a>

```typescript
import { lakeformationTagAssociation } from '@cdktn/provider-awscc'

new lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetTableWildcard">resetTableWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTableWildcard` <a name="resetTableWildcard" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetTableWildcard"></a>

```typescript
public resetTableWildcard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.tableWildcardInput">tableWildcardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.tableWildcard">tableWildcard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tableWildcardInput`<sup>Optional</sup> <a name="tableWildcardInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.tableWildcardInput"></a>

```typescript
public readonly tableWildcardInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tableWildcard`<sup>Required</sup> <a name="tableWildcard" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.tableWildcard"></a>

```typescript
public readonly tableWildcard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationTagAssociationResourceTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a>

---


### LakeformationTagAssociationResourceTableWithColumnsOutputReference <a name="LakeformationTagAssociationResourceTableWithColumnsOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer"></a>

```typescript
import { lakeformationTagAssociation } from '@cdktn/provider-awscc'

new lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetColumnNames"></a>

```typescript
public resetColumnNames(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNamesInput">columnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNames">columnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNamesInput"></a>

```typescript
public readonly columnNamesInput: string[];
```

- *Type:* string[]

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationTagAssociationResourceTableWithColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a>

---



