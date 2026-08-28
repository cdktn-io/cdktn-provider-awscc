# `ec2IpamResourceDiscoveryAssociation` Submodule <a name="`ec2IpamResourceDiscoveryAssociation` Submodule" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamResourceDiscoveryAssociation <a name="Ec2IpamResourceDiscoveryAssociation" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_resource_discovery_association awscc_ec2_ipam_resource_discovery_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.Initializer"></a>

```typescript
import { ec2IpamResourceDiscoveryAssociation } from '@cdktn/provider-awscc'

new ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation(scope: Construct, id: string, config: Ec2IpamResourceDiscoveryAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig">Ec2IpamResourceDiscoveryAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig">Ec2IpamResourceDiscoveryAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2IpamResourceDiscoveryAssociationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTags">Ec2IpamResourceDiscoveryAssociationTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2IpamResourceDiscoveryAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.isConstruct"></a>

```typescript
import { ec2IpamResourceDiscoveryAssociation } from '@cdktn/provider-awscc'

ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.isTerraformElement"></a>

```typescript
import { ec2IpamResourceDiscoveryAssociation } from '@cdktn/provider-awscc'

ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.isTerraformResource"></a>

```typescript
import { ec2IpamResourceDiscoveryAssociation } from '@cdktn/provider-awscc'

ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.generateConfigForImport"></a>

```typescript
import { ec2IpamResourceDiscoveryAssociation } from '@cdktn/provider-awscc'

ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2IpamResourceDiscoveryAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2IpamResourceDiscoveryAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2IpamResourceDiscoveryAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_resource_discovery_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamResourceDiscoveryAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.ipamArn">ipamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.ipamRegion">ipamRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryAssociationArn">ipamResourceDiscoveryAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryAssociationId">ipamResourceDiscoveryAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.isDefault">isDefault</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.resourceDiscoveryStatus">resourceDiscoveryStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList">Ec2IpamResourceDiscoveryAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.ipamIdInput">ipamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryIdInput">ipamResourceDiscoveryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTags">Ec2IpamResourceDiscoveryAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.ipamId">ipamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryId">ipamResourceDiscoveryId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipamArn`<sup>Required</sup> <a name="ipamArn" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.ipamArn"></a>

```typescript
public readonly ipamArn: string;
```

- *Type:* string

---

##### `ipamRegion`<sup>Required</sup> <a name="ipamRegion" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.ipamRegion"></a>

```typescript
public readonly ipamRegion: string;
```

- *Type:* string

---

##### `ipamResourceDiscoveryAssociationArn`<sup>Required</sup> <a name="ipamResourceDiscoveryAssociationArn" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryAssociationArn"></a>

```typescript
public readonly ipamResourceDiscoveryAssociationArn: string;
```

- *Type:* string

---

##### `ipamResourceDiscoveryAssociationId`<sup>Required</sup> <a name="ipamResourceDiscoveryAssociationId" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryAssociationId"></a>

```typescript
public readonly ipamResourceDiscoveryAssociationId: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `resourceDiscoveryStatus`<sup>Required</sup> <a name="resourceDiscoveryStatus" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.resourceDiscoveryStatus"></a>

```typescript
public readonly resourceDiscoveryStatus: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.tags"></a>

```typescript
public readonly tags: Ec2IpamResourceDiscoveryAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList">Ec2IpamResourceDiscoveryAssociationTagsList</a>

---

##### `ipamIdInput`<sup>Optional</sup> <a name="ipamIdInput" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.ipamIdInput"></a>

```typescript
public readonly ipamIdInput: string;
```

- *Type:* string

---

##### `ipamResourceDiscoveryIdInput`<sup>Optional</sup> <a name="ipamResourceDiscoveryIdInput" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryIdInput"></a>

```typescript
public readonly ipamResourceDiscoveryIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2IpamResourceDiscoveryAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTags">Ec2IpamResourceDiscoveryAssociationTags</a>[]

---

##### `ipamId`<sup>Required</sup> <a name="ipamId" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.ipamId"></a>

```typescript
public readonly ipamId: string;
```

- *Type:* string

---

##### `ipamResourceDiscoveryId`<sup>Required</sup> <a name="ipamResourceDiscoveryId" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryId"></a>

```typescript
public readonly ipamResourceDiscoveryId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamResourceDiscoveryAssociationConfig <a name="Ec2IpamResourceDiscoveryAssociationConfig" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.Initializer"></a>

```typescript
import { ec2IpamResourceDiscoveryAssociation } from '@cdktn/provider-awscc'

const ec2IpamResourceDiscoveryAssociationConfig: ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.ipamId">ipamId</a></code> | <code>string</code> | The Id of the IPAM this Resource Discovery is associated to. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.ipamResourceDiscoveryId">ipamResourceDiscoveryId</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IPAM Resource Discovery Association. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTags">Ec2IpamResourceDiscoveryAssociationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ipamId`<sup>Required</sup> <a name="ipamId" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.ipamId"></a>

```typescript
public readonly ipamId: string;
```

- *Type:* string

The Id of the IPAM this Resource Discovery is associated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_resource_discovery_association#ipam_id Ec2IpamResourceDiscoveryAssociation#ipam_id}

---

##### `ipamResourceDiscoveryId`<sup>Required</sup> <a name="ipamResourceDiscoveryId" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.ipamResourceDiscoveryId"></a>

```typescript
public readonly ipamResourceDiscoveryId: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IPAM Resource Discovery Association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_resource_discovery_association#ipam_resource_discovery_id Ec2IpamResourceDiscoveryAssociation#ipam_resource_discovery_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2IpamResourceDiscoveryAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTags">Ec2IpamResourceDiscoveryAssociationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_resource_discovery_association#tags Ec2IpamResourceDiscoveryAssociation#tags}

---

### Ec2IpamResourceDiscoveryAssociationTags <a name="Ec2IpamResourceDiscoveryAssociationTags" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTags.Initializer"></a>

```typescript
import { ec2IpamResourceDiscoveryAssociation } from '@cdktn/provider-awscc'

const ec2IpamResourceDiscoveryAssociationTags: ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_resource_discovery_association#key Ec2IpamResourceDiscoveryAssociation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_resource_discovery_association#value Ec2IpamResourceDiscoveryAssociation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2IpamResourceDiscoveryAssociationTagsList <a name="Ec2IpamResourceDiscoveryAssociationTagsList" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.Initializer"></a>

```typescript
import { ec2IpamResourceDiscoveryAssociation } from '@cdktn/provider-awscc'

new ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.get"></a>

```typescript
public get(index: number): Ec2IpamResourceDiscoveryAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTags">Ec2IpamResourceDiscoveryAssociationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamResourceDiscoveryAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTags">Ec2IpamResourceDiscoveryAssociationTags</a>[]

---


### Ec2IpamResourceDiscoveryAssociationTagsOutputReference <a name="Ec2IpamResourceDiscoveryAssociationTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.Initializer"></a>

```typescript
import { ec2IpamResourceDiscoveryAssociation } from '@cdktn/provider-awscc'

new ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTags">Ec2IpamResourceDiscoveryAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamResourceDiscoveryAssociationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscoveryAssociation.Ec2IpamResourceDiscoveryAssociationTags">Ec2IpamResourceDiscoveryAssociationTags</a>

---



