# `ec2IpamAllocation` Submodule <a name="`ec2IpamAllocation` Submodule" id="@cdktn/provider-awscc.ec2IpamAllocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamAllocation <a name="Ec2IpamAllocation" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_allocation awscc_ec2_ipam_allocation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer"></a>

```typescript
import { ec2IpamAllocation } from '@cdktn/provider-awscc'

new ec2IpamAllocation.Ec2IpamAllocation(scope: Construct, id: string, config: Ec2IpamAllocationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig">Ec2IpamAllocationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig">Ec2IpamAllocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.resetCidr">resetCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.resetNetmaskLength">resetNetmaskLength</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.resetCidr"></a>

```typescript
public resetCidr(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetNetmaskLength` <a name="resetNetmaskLength" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.resetNetmaskLength"></a>

```typescript
public resetNetmaskLength(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2IpamAllocation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.isConstruct"></a>

```typescript
import { ec2IpamAllocation } from '@cdktn/provider-awscc'

ec2IpamAllocation.Ec2IpamAllocation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.isTerraformElement"></a>

```typescript
import { ec2IpamAllocation } from '@cdktn/provider-awscc'

ec2IpamAllocation.Ec2IpamAllocation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.isTerraformResource"></a>

```typescript
import { ec2IpamAllocation } from '@cdktn/provider-awscc'

ec2IpamAllocation.Ec2IpamAllocation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.generateConfigForImport"></a>

```typescript
import { ec2IpamAllocation } from '@cdktn/provider-awscc'

ec2IpamAllocation.Ec2IpamAllocation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2IpamAllocation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2IpamAllocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2IpamAllocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_allocation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamAllocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.ipamPoolAllocationId">ipamPoolAllocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.ipamPoolIdInput">ipamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.netmaskLengthInput">netmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.ipamPoolId">ipamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.netmaskLength">netmaskLength</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipamPoolAllocationId`<sup>Required</sup> <a name="ipamPoolAllocationId" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.ipamPoolAllocationId"></a>

```typescript
public readonly ipamPoolAllocationId: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `ipamPoolIdInput`<sup>Optional</sup> <a name="ipamPoolIdInput" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.ipamPoolIdInput"></a>

```typescript
public readonly ipamPoolIdInput: string;
```

- *Type:* string

---

##### `netmaskLengthInput`<sup>Optional</sup> <a name="netmaskLengthInput" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.netmaskLengthInput"></a>

```typescript
public readonly netmaskLengthInput: number;
```

- *Type:* number

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.ipamPoolId"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* string

---

##### `netmaskLength`<sup>Required</sup> <a name="netmaskLength" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.netmaskLength"></a>

```typescript
public readonly netmaskLength: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamAllocationConfig <a name="Ec2IpamAllocationConfig" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.Initializer"></a>

```typescript
import { ec2IpamAllocation } from '@cdktn/provider-awscc'

const ec2IpamAllocationConfig: ec2IpamAllocation.Ec2IpamAllocationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.ipamPoolId">ipamPoolId</a></code> | <code>string</code> | Id of the IPAM Pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.cidr">cidr</a></code> | <code>string</code> | Represents an IPAM custom allocation of a single IPv4 or IPv6 CIDR. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_allocation#description Ec2IpamAllocation#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.netmaskLength">netmaskLength</a></code> | <code>number</code> | The desired netmask length of the allocation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.ipamPoolId"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* string

Id of the IPAM Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_allocation#ipam_pool_id Ec2IpamAllocation#ipam_pool_id}

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Represents an IPAM custom allocation of a single IPv4 or IPv6 CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_allocation#cidr Ec2IpamAllocation#cidr}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_allocation#description Ec2IpamAllocation#description}.

---

##### `netmaskLength`<sup>Optional</sup> <a name="netmaskLength" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.netmaskLength"></a>

```typescript
public readonly netmaskLength: number;
```

- *Type:* number

The desired netmask length of the allocation.

If set, IPAM will choose a block of free space with this size and return the CIDR representing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_allocation#netmask_length Ec2IpamAllocation#netmask_length}

---



