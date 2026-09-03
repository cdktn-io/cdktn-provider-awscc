# `outpostsSite` Submodule <a name="`outpostsSite` Submodule" id="@cdktn/provider-awscc.outpostsSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OutpostsSite <a name="OutpostsSite" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site awscc_outposts_site}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer"></a>

```typescript
import { outpostsSite } from '@cdktn/provider-awscc'

new outpostsSite.OutpostsSite(scope: Construct, id: string, config: OutpostsSiteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig">OutpostsSiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig">OutpostsSiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress">putOperatingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties">putRackPhysicalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress">putShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOperatingAddress">resetOperatingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetRackPhysicalProperties">resetRackPhysicalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetShippingAddress">resetShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOperatingAddress` <a name="putOperatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress"></a>

```typescript
public putOperatingAddress(value: OutpostsSiteOperatingAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a>

---

##### `putRackPhysicalProperties` <a name="putRackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties"></a>

```typescript
public putRackPhysicalProperties(value: OutpostsSiteRackPhysicalProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a>

---

##### `putShippingAddress` <a name="putShippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress"></a>

```typescript
public putShippingAddress(value: OutpostsSiteShippingAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putTags"></a>

```typescript
public putTags(value: IResolvable | OutpostsSiteTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetNotes` <a name="resetNotes" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetNotes"></a>

```typescript
public resetNotes(): void
```

##### `resetOperatingAddress` <a name="resetOperatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOperatingAddress"></a>

```typescript
public resetOperatingAddress(): void
```

##### `resetRackPhysicalProperties` <a name="resetRackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetRackPhysicalProperties"></a>

```typescript
public resetRackPhysicalProperties(): void
```

##### `resetShippingAddress` <a name="resetShippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetShippingAddress"></a>

```typescript
public resetShippingAddress(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OutpostsSite resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isConstruct"></a>

```typescript
import { outpostsSite } from '@cdktn/provider-awscc'

outpostsSite.OutpostsSite.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformElement"></a>

```typescript
import { outpostsSite } from '@cdktn/provider-awscc'

outpostsSite.OutpostsSite.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformResource"></a>

```typescript
import { outpostsSite } from '@cdktn/provider-awscc'

outpostsSite.OutpostsSite.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport"></a>

```typescript
import { outpostsSite } from '@cdktn/provider-awscc'

outpostsSite.OutpostsSite.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OutpostsSite resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OutpostsSite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OutpostsSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OutpostsSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddress">operatingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference">OutpostsSiteOperatingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalProperties">rackPhysicalProperties</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference">OutpostsSiteRackPhysicalPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddress">shippingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference">OutpostsSiteShippingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteArn">siteArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteId">siteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList">OutpostsSiteTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notesInput">notesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddressInput">operatingAddressInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalPropertiesInput">rackPhysicalPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddressInput">shippingAddressInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notes">notes</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `operatingAddress`<sup>Required</sup> <a name="operatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddress"></a>

```typescript
public readonly operatingAddress: OutpostsSiteOperatingAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference">OutpostsSiteOperatingAddressOutputReference</a>

---

##### `rackPhysicalProperties`<sup>Required</sup> <a name="rackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalProperties"></a>

```typescript
public readonly rackPhysicalProperties: OutpostsSiteRackPhysicalPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference">OutpostsSiteRackPhysicalPropertiesOutputReference</a>

---

##### `shippingAddress`<sup>Required</sup> <a name="shippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddress"></a>

```typescript
public readonly shippingAddress: OutpostsSiteShippingAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference">OutpostsSiteShippingAddressOutputReference</a>

---

##### `siteArn`<sup>Required</sup> <a name="siteArn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteArn"></a>

```typescript
public readonly siteArn: string;
```

- *Type:* string

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tags"></a>

```typescript
public readonly tags: OutpostsSiteTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList">OutpostsSiteTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notesInput"></a>

```typescript
public readonly notesInput: string;
```

- *Type:* string

---

##### `operatingAddressInput`<sup>Optional</sup> <a name="operatingAddressInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddressInput"></a>

```typescript
public readonly operatingAddressInput: IResolvable | OutpostsSiteOperatingAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a>

---

##### `rackPhysicalPropertiesInput`<sup>Optional</sup> <a name="rackPhysicalPropertiesInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalPropertiesInput"></a>

```typescript
public readonly rackPhysicalPropertiesInput: IResolvable | OutpostsSiteRackPhysicalProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a>

---

##### `shippingAddressInput`<sup>Optional</sup> <a name="shippingAddressInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddressInput"></a>

```typescript
public readonly shippingAddressInput: IResolvable | OutpostsSiteShippingAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | OutpostsSiteTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OutpostsSiteConfig <a name="OutpostsSiteConfig" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.Initializer"></a>

```typescript
import { outpostsSite } from '@cdktn/provider-awscc'

const outpostsSiteConfig: outpostsSite.OutpostsSiteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#name OutpostsSite#name}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#description OutpostsSite#description}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.notes">notes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#notes OutpostsSite#notes}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.operatingAddress">operatingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#operating_address OutpostsSite#operating_address}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.rackPhysicalProperties">rackPhysicalProperties</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#rack_physical_properties OutpostsSite#rack_physical_properties}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.shippingAddress">shippingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#shipping_address OutpostsSite#shipping_address}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#tags OutpostsSite#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#name OutpostsSite#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#description OutpostsSite#description}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#notes OutpostsSite#notes}.

---

##### `operatingAddress`<sup>Optional</sup> <a name="operatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.operatingAddress"></a>

```typescript
public readonly operatingAddress: OutpostsSiteOperatingAddress;
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#operating_address OutpostsSite#operating_address}.

---

##### `rackPhysicalProperties`<sup>Optional</sup> <a name="rackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.rackPhysicalProperties"></a>

```typescript
public readonly rackPhysicalProperties: OutpostsSiteRackPhysicalProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#rack_physical_properties OutpostsSite#rack_physical_properties}.

---

##### `shippingAddress`<sup>Optional</sup> <a name="shippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.shippingAddress"></a>

```typescript
public readonly shippingAddress: OutpostsSiteShippingAddress;
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#shipping_address OutpostsSite#shipping_address}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | OutpostsSiteTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#tags OutpostsSite#tags}.

---

### OutpostsSiteOperatingAddress <a name="OutpostsSiteOperatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.Initializer"></a>

```typescript
import { outpostsSite } from '@cdktn/provider-awscc'

const outpostsSiteOperatingAddress: outpostsSite.OutpostsSiteOperatingAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine1">addressLine1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine2">addressLine2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine3">addressLine3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.city">city</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#city OutpostsSite#city}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactName">contactName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactPhoneNumber">contactPhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.countryCode">countryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.districtOrCounty">districtOrCounty</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.municipality">municipality</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.postalCode">postalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.stateOrRegion">stateOrRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}. |

---

##### `addressLine1`<sup>Optional</sup> <a name="addressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}.

---

##### `addressLine3`<sup>Optional</sup> <a name="addressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine3"></a>

```typescript
public readonly addressLine3: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#city OutpostsSite#city}.

---

##### `contactName`<sup>Optional</sup> <a name="contactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactName"></a>

```typescript
public readonly contactName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}.

---

##### `contactPhoneNumber`<sup>Optional</sup> <a name="contactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactPhoneNumber"></a>

```typescript
public readonly contactPhoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}.

---

##### `districtOrCounty`<sup>Optional</sup> <a name="districtOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.districtOrCounty"></a>

```typescript
public readonly districtOrCounty: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}.

---

##### `municipality`<sup>Optional</sup> <a name="municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.municipality"></a>

```typescript
public readonly municipality: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}.

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}.

---

##### `stateOrRegion`<sup>Optional</sup> <a name="stateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.stateOrRegion"></a>

```typescript
public readonly stateOrRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}.

---

### OutpostsSiteRackPhysicalProperties <a name="OutpostsSiteRackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.Initializer"></a>

```typescript
import { outpostsSite } from '@cdktn/provider-awscc'

const outpostsSiteRackPhysicalProperties: outpostsSite.OutpostsSiteRackPhysicalProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.fiberOpticCableType">fiberOpticCableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#fiber_optic_cable_type OutpostsSite#fiber_optic_cable_type}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.maximumSupportedWeightLbs">maximumSupportedWeightLbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#maximum_supported_weight_lbs OutpostsSite#maximum_supported_weight_lbs}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.opticalStandard">opticalStandard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#optical_standard OutpostsSite#optical_standard}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerConnector">powerConnector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_connector OutpostsSite#power_connector}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerDrawKva">powerDrawKva</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_draw_kva OutpostsSite#power_draw_kva}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerFeedDrop">powerFeedDrop</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_feed_drop OutpostsSite#power_feed_drop}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerPhase">powerPhase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_phase OutpostsSite#power_phase}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkCount">uplinkCount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#uplink_count OutpostsSite#uplink_count}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkGbps">uplinkGbps</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#uplink_gbps OutpostsSite#uplink_gbps}. |

---

##### `fiberOpticCableType`<sup>Optional</sup> <a name="fiberOpticCableType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.fiberOpticCableType"></a>

```typescript
public readonly fiberOpticCableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#fiber_optic_cable_type OutpostsSite#fiber_optic_cable_type}.

---

##### `maximumSupportedWeightLbs`<sup>Optional</sup> <a name="maximumSupportedWeightLbs" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.maximumSupportedWeightLbs"></a>

```typescript
public readonly maximumSupportedWeightLbs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#maximum_supported_weight_lbs OutpostsSite#maximum_supported_weight_lbs}.

---

##### `opticalStandard`<sup>Optional</sup> <a name="opticalStandard" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.opticalStandard"></a>

```typescript
public readonly opticalStandard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#optical_standard OutpostsSite#optical_standard}.

---

##### `powerConnector`<sup>Optional</sup> <a name="powerConnector" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerConnector"></a>

```typescript
public readonly powerConnector: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_connector OutpostsSite#power_connector}.

---

##### `powerDrawKva`<sup>Optional</sup> <a name="powerDrawKva" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerDrawKva"></a>

```typescript
public readonly powerDrawKva: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_draw_kva OutpostsSite#power_draw_kva}.

---

##### `powerFeedDrop`<sup>Optional</sup> <a name="powerFeedDrop" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerFeedDrop"></a>

```typescript
public readonly powerFeedDrop: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_feed_drop OutpostsSite#power_feed_drop}.

---

##### `powerPhase`<sup>Optional</sup> <a name="powerPhase" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerPhase"></a>

```typescript
public readonly powerPhase: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_phase OutpostsSite#power_phase}.

---

##### `uplinkCount`<sup>Optional</sup> <a name="uplinkCount" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkCount"></a>

```typescript
public readonly uplinkCount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#uplink_count OutpostsSite#uplink_count}.

---

##### `uplinkGbps`<sup>Optional</sup> <a name="uplinkGbps" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkGbps"></a>

```typescript
public readonly uplinkGbps: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#uplink_gbps OutpostsSite#uplink_gbps}.

---

### OutpostsSiteShippingAddress <a name="OutpostsSiteShippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.Initializer"></a>

```typescript
import { outpostsSite } from '@cdktn/provider-awscc'

const outpostsSiteShippingAddress: outpostsSite.OutpostsSiteShippingAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine1">addressLine1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine2">addressLine2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine3">addressLine3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.city">city</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#city OutpostsSite#city}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactName">contactName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactPhoneNumber">contactPhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.countryCode">countryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.districtOrCounty">districtOrCounty</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.municipality">municipality</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.postalCode">postalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.stateOrRegion">stateOrRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}. |

---

##### `addressLine1`<sup>Optional</sup> <a name="addressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}.

---

##### `addressLine2`<sup>Optional</sup> <a name="addressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}.

---

##### `addressLine3`<sup>Optional</sup> <a name="addressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine3"></a>

```typescript
public readonly addressLine3: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#city OutpostsSite#city}.

---

##### `contactName`<sup>Optional</sup> <a name="contactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactName"></a>

```typescript
public readonly contactName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}.

---

##### `contactPhoneNumber`<sup>Optional</sup> <a name="contactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactPhoneNumber"></a>

```typescript
public readonly contactPhoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}.

---

##### `districtOrCounty`<sup>Optional</sup> <a name="districtOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.districtOrCounty"></a>

```typescript
public readonly districtOrCounty: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}.

---

##### `municipality`<sup>Optional</sup> <a name="municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.municipality"></a>

```typescript
public readonly municipality: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}.

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}.

---

##### `stateOrRegion`<sup>Optional</sup> <a name="stateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.stateOrRegion"></a>

```typescript
public readonly stateOrRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}.

---

### OutpostsSiteTags <a name="OutpostsSiteTags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.Initializer"></a>

```typescript
import { outpostsSite } from '@cdktn/provider-awscc'

const outpostsSiteTags: outpostsSite.OutpostsSiteTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#key OutpostsSite#key}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#value OutpostsSite#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#key OutpostsSite#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#value OutpostsSite#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OutpostsSiteOperatingAddressOutputReference <a name="OutpostsSiteOperatingAddressOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer"></a>

```typescript
import { outpostsSite } from '@cdktn/provider-awscc'

new outpostsSite.OutpostsSiteOperatingAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine1">resetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine3">resetAddressLine3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactName">resetContactName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactPhoneNumber">resetContactPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetDistrictOrCounty">resetDistrictOrCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetMunicipality">resetMunicipality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetStateOrRegion">resetStateOrRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressLine1` <a name="resetAddressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine1"></a>

```typescript
public resetAddressLine1(): void
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine2"></a>

```typescript
public resetAddressLine2(): void
```

##### `resetAddressLine3` <a name="resetAddressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine3"></a>

```typescript
public resetAddressLine3(): void
```

##### `resetCity` <a name="resetCity" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetContactName` <a name="resetContactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactName"></a>

```typescript
public resetContactName(): void
```

##### `resetContactPhoneNumber` <a name="resetContactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactPhoneNumber"></a>

```typescript
public resetContactPhoneNumber(): void
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCountryCode"></a>

```typescript
public resetCountryCode(): void
```

##### `resetDistrictOrCounty` <a name="resetDistrictOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetDistrictOrCounty"></a>

```typescript
public resetDistrictOrCounty(): void
```

##### `resetMunicipality` <a name="resetMunicipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetMunicipality"></a>

```typescript
public resetMunicipality(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetStateOrRegion` <a name="resetStateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetStateOrRegion"></a>

```typescript
public resetStateOrRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1Input">addressLine1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2Input">addressLine2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3Input">addressLine3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactNameInput">contactNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumberInput">contactPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCountyInput">districtOrCountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipalityInput">municipalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegionInput">stateOrRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1">addressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2">addressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3">addressLine3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactName">contactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumber">contactPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCounty">districtOrCounty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipality">municipality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegion">stateOrRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1Input"></a>

```typescript
public readonly addressLine1Input: string;
```

- *Type:* string

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2Input"></a>

```typescript
public readonly addressLine2Input: string;
```

- *Type:* string

---

##### `addressLine3Input`<sup>Optional</sup> <a name="addressLine3Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3Input"></a>

```typescript
public readonly addressLine3Input: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `contactNameInput`<sup>Optional</sup> <a name="contactNameInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactNameInput"></a>

```typescript
public readonly contactNameInput: string;
```

- *Type:* string

---

##### `contactPhoneNumberInput`<sup>Optional</sup> <a name="contactPhoneNumberInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumberInput"></a>

```typescript
public readonly contactPhoneNumberInput: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `districtOrCountyInput`<sup>Optional</sup> <a name="districtOrCountyInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCountyInput"></a>

```typescript
public readonly districtOrCountyInput: string;
```

- *Type:* string

---

##### `municipalityInput`<sup>Optional</sup> <a name="municipalityInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipalityInput"></a>

```typescript
public readonly municipalityInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `stateOrRegionInput`<sup>Optional</sup> <a name="stateOrRegionInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegionInput"></a>

```typescript
public readonly stateOrRegionInput: string;
```

- *Type:* string

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

---

##### `addressLine3`<sup>Required</sup> <a name="addressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3"></a>

```typescript
public readonly addressLine3: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `contactName`<sup>Required</sup> <a name="contactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactName"></a>

```typescript
public readonly contactName: string;
```

- *Type:* string

---

##### `contactPhoneNumber`<sup>Required</sup> <a name="contactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumber"></a>

```typescript
public readonly contactPhoneNumber: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `districtOrCounty`<sup>Required</sup> <a name="districtOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCounty"></a>

```typescript
public readonly districtOrCounty: string;
```

- *Type:* string

---

##### `municipality`<sup>Required</sup> <a name="municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipality"></a>

```typescript
public readonly municipality: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `stateOrRegion`<sup>Required</sup> <a name="stateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegion"></a>

```typescript
public readonly stateOrRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OutpostsSiteOperatingAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a>

---


### OutpostsSiteRackPhysicalPropertiesOutputReference <a name="OutpostsSiteRackPhysicalPropertiesOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer"></a>

```typescript
import { outpostsSite } from '@cdktn/provider-awscc'

new outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetFiberOpticCableType">resetFiberOpticCableType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetMaximumSupportedWeightLbs">resetMaximumSupportedWeightLbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetOpticalStandard">resetOpticalStandard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerConnector">resetPowerConnector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerDrawKva">resetPowerDrawKva</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerFeedDrop">resetPowerFeedDrop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerPhase">resetPowerPhase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkCount">resetUplinkCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkGbps">resetUplinkGbps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFiberOpticCableType` <a name="resetFiberOpticCableType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetFiberOpticCableType"></a>

```typescript
public resetFiberOpticCableType(): void
```

##### `resetMaximumSupportedWeightLbs` <a name="resetMaximumSupportedWeightLbs" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetMaximumSupportedWeightLbs"></a>

```typescript
public resetMaximumSupportedWeightLbs(): void
```

##### `resetOpticalStandard` <a name="resetOpticalStandard" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetOpticalStandard"></a>

```typescript
public resetOpticalStandard(): void
```

##### `resetPowerConnector` <a name="resetPowerConnector" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerConnector"></a>

```typescript
public resetPowerConnector(): void
```

##### `resetPowerDrawKva` <a name="resetPowerDrawKva" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerDrawKva"></a>

```typescript
public resetPowerDrawKva(): void
```

##### `resetPowerFeedDrop` <a name="resetPowerFeedDrop" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerFeedDrop"></a>

```typescript
public resetPowerFeedDrop(): void
```

##### `resetPowerPhase` <a name="resetPowerPhase" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerPhase"></a>

```typescript
public resetPowerPhase(): void
```

##### `resetUplinkCount` <a name="resetUplinkCount" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkCount"></a>

```typescript
public resetUplinkCount(): void
```

##### `resetUplinkGbps` <a name="resetUplinkGbps" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkGbps"></a>

```typescript
public resetUplinkGbps(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableTypeInput">fiberOpticCableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbsInput">maximumSupportedWeightLbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandardInput">opticalStandardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnectorInput">powerConnectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKvaInput">powerDrawKvaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDropInput">powerFeedDropInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhaseInput">powerPhaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCountInput">uplinkCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbpsInput">uplinkGbpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableType">fiberOpticCableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbs">maximumSupportedWeightLbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandard">opticalStandard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnector">powerConnector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKva">powerDrawKva</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDrop">powerFeedDrop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhase">powerPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCount">uplinkCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbps">uplinkGbps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fiberOpticCableTypeInput`<sup>Optional</sup> <a name="fiberOpticCableTypeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableTypeInput"></a>

```typescript
public readonly fiberOpticCableTypeInput: string;
```

- *Type:* string

---

##### `maximumSupportedWeightLbsInput`<sup>Optional</sup> <a name="maximumSupportedWeightLbsInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbsInput"></a>

```typescript
public readonly maximumSupportedWeightLbsInput: string;
```

- *Type:* string

---

##### `opticalStandardInput`<sup>Optional</sup> <a name="opticalStandardInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandardInput"></a>

```typescript
public readonly opticalStandardInput: string;
```

- *Type:* string

---

##### `powerConnectorInput`<sup>Optional</sup> <a name="powerConnectorInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnectorInput"></a>

```typescript
public readonly powerConnectorInput: string;
```

- *Type:* string

---

##### `powerDrawKvaInput`<sup>Optional</sup> <a name="powerDrawKvaInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKvaInput"></a>

```typescript
public readonly powerDrawKvaInput: string;
```

- *Type:* string

---

##### `powerFeedDropInput`<sup>Optional</sup> <a name="powerFeedDropInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDropInput"></a>

```typescript
public readonly powerFeedDropInput: string;
```

- *Type:* string

---

##### `powerPhaseInput`<sup>Optional</sup> <a name="powerPhaseInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhaseInput"></a>

```typescript
public readonly powerPhaseInput: string;
```

- *Type:* string

---

##### `uplinkCountInput`<sup>Optional</sup> <a name="uplinkCountInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCountInput"></a>

```typescript
public readonly uplinkCountInput: string;
```

- *Type:* string

---

##### `uplinkGbpsInput`<sup>Optional</sup> <a name="uplinkGbpsInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbpsInput"></a>

```typescript
public readonly uplinkGbpsInput: string;
```

- *Type:* string

---

##### `fiberOpticCableType`<sup>Required</sup> <a name="fiberOpticCableType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableType"></a>

```typescript
public readonly fiberOpticCableType: string;
```

- *Type:* string

---

##### `maximumSupportedWeightLbs`<sup>Required</sup> <a name="maximumSupportedWeightLbs" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbs"></a>

```typescript
public readonly maximumSupportedWeightLbs: string;
```

- *Type:* string

---

##### `opticalStandard`<sup>Required</sup> <a name="opticalStandard" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandard"></a>

```typescript
public readonly opticalStandard: string;
```

- *Type:* string

---

##### `powerConnector`<sup>Required</sup> <a name="powerConnector" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnector"></a>

```typescript
public readonly powerConnector: string;
```

- *Type:* string

---

##### `powerDrawKva`<sup>Required</sup> <a name="powerDrawKva" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKva"></a>

```typescript
public readonly powerDrawKva: string;
```

- *Type:* string

---

##### `powerFeedDrop`<sup>Required</sup> <a name="powerFeedDrop" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDrop"></a>

```typescript
public readonly powerFeedDrop: string;
```

- *Type:* string

---

##### `powerPhase`<sup>Required</sup> <a name="powerPhase" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhase"></a>

```typescript
public readonly powerPhase: string;
```

- *Type:* string

---

##### `uplinkCount`<sup>Required</sup> <a name="uplinkCount" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCount"></a>

```typescript
public readonly uplinkCount: string;
```

- *Type:* string

---

##### `uplinkGbps`<sup>Required</sup> <a name="uplinkGbps" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbps"></a>

```typescript
public readonly uplinkGbps: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OutpostsSiteRackPhysicalProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a>

---


### OutpostsSiteShippingAddressOutputReference <a name="OutpostsSiteShippingAddressOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer"></a>

```typescript
import { outpostsSite } from '@cdktn/provider-awscc'

new outpostsSite.OutpostsSiteShippingAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine1">resetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine2">resetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine3">resetAddressLine3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactName">resetContactName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactPhoneNumber">resetContactPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetDistrictOrCounty">resetDistrictOrCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetMunicipality">resetMunicipality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetStateOrRegion">resetStateOrRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressLine1` <a name="resetAddressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine1"></a>

```typescript
public resetAddressLine1(): void
```

##### `resetAddressLine2` <a name="resetAddressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine2"></a>

```typescript
public resetAddressLine2(): void
```

##### `resetAddressLine3` <a name="resetAddressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine3"></a>

```typescript
public resetAddressLine3(): void
```

##### `resetCity` <a name="resetCity" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetContactName` <a name="resetContactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactName"></a>

```typescript
public resetContactName(): void
```

##### `resetContactPhoneNumber` <a name="resetContactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactPhoneNumber"></a>

```typescript
public resetContactPhoneNumber(): void
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCountryCode"></a>

```typescript
public resetCountryCode(): void
```

##### `resetDistrictOrCounty` <a name="resetDistrictOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetDistrictOrCounty"></a>

```typescript
public resetDistrictOrCounty(): void
```

##### `resetMunicipality` <a name="resetMunicipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetMunicipality"></a>

```typescript
public resetMunicipality(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetStateOrRegion` <a name="resetStateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetStateOrRegion"></a>

```typescript
public resetStateOrRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1Input">addressLine1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2Input">addressLine2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3Input">addressLine3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactNameInput">contactNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumberInput">contactPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCountyInput">districtOrCountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipalityInput">municipalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegionInput">stateOrRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1">addressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2">addressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3">addressLine3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactName">contactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumber">contactPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCounty">districtOrCounty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipality">municipality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegion">stateOrRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressLine1Input`<sup>Optional</sup> <a name="addressLine1Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1Input"></a>

```typescript
public readonly addressLine1Input: string;
```

- *Type:* string

---

##### `addressLine2Input`<sup>Optional</sup> <a name="addressLine2Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2Input"></a>

```typescript
public readonly addressLine2Input: string;
```

- *Type:* string

---

##### `addressLine3Input`<sup>Optional</sup> <a name="addressLine3Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3Input"></a>

```typescript
public readonly addressLine3Input: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `contactNameInput`<sup>Optional</sup> <a name="contactNameInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactNameInput"></a>

```typescript
public readonly contactNameInput: string;
```

- *Type:* string

---

##### `contactPhoneNumberInput`<sup>Optional</sup> <a name="contactPhoneNumberInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumberInput"></a>

```typescript
public readonly contactPhoneNumberInput: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `districtOrCountyInput`<sup>Optional</sup> <a name="districtOrCountyInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCountyInput"></a>

```typescript
public readonly districtOrCountyInput: string;
```

- *Type:* string

---

##### `municipalityInput`<sup>Optional</sup> <a name="municipalityInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipalityInput"></a>

```typescript
public readonly municipalityInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `stateOrRegionInput`<sup>Optional</sup> <a name="stateOrRegionInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegionInput"></a>

```typescript
public readonly stateOrRegionInput: string;
```

- *Type:* string

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

---

##### `addressLine3`<sup>Required</sup> <a name="addressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3"></a>

```typescript
public readonly addressLine3: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `contactName`<sup>Required</sup> <a name="contactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactName"></a>

```typescript
public readonly contactName: string;
```

- *Type:* string

---

##### `contactPhoneNumber`<sup>Required</sup> <a name="contactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumber"></a>

```typescript
public readonly contactPhoneNumber: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `districtOrCounty`<sup>Required</sup> <a name="districtOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCounty"></a>

```typescript
public readonly districtOrCounty: string;
```

- *Type:* string

---

##### `municipality`<sup>Required</sup> <a name="municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipality"></a>

```typescript
public readonly municipality: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `stateOrRegion`<sup>Required</sup> <a name="stateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegion"></a>

```typescript
public readonly stateOrRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OutpostsSiteShippingAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a>

---


### OutpostsSiteTagsList <a name="OutpostsSiteTagsList" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer"></a>

```typescript
import { outpostsSite } from '@cdktn/provider-awscc'

new outpostsSite.OutpostsSiteTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.get"></a>

```typescript
public get(index: number): OutpostsSiteTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OutpostsSiteTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>[]

---


### OutpostsSiteTagsOutputReference <a name="OutpostsSiteTagsOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer"></a>

```typescript
import { outpostsSite } from '@cdktn/provider-awscc'

new outpostsSite.OutpostsSiteTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OutpostsSiteTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>

---



