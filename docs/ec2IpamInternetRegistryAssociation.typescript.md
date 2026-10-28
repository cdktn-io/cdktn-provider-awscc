# `ec2IpamInternetRegistryAssociation` Submodule <a name="`ec2IpamInternetRegistryAssociation` Submodule" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamInternetRegistryAssociation <a name="Ec2IpamInternetRegistryAssociation" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association awscc_ec2_ipam_internet_registry_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer"></a>

```typescript
import { ec2IpamInternetRegistryAssociation } from '@cdktn/provider-awscc'

new ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation(scope: Construct, id: string, config: Ec2IpamInternetRegistryAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig">Ec2IpamInternetRegistryAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig">Ec2IpamInternetRegistryAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2IpamInternetRegistryAssociationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2IpamInternetRegistryAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isConstruct"></a>

```typescript
import { ec2IpamInternetRegistryAssociation } from '@cdktn/provider-awscc'

ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isTerraformElement"></a>

```typescript
import { ec2IpamInternetRegistryAssociation } from '@cdktn/provider-awscc'

ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isTerraformResource"></a>

```typescript
import { ec2IpamInternetRegistryAssociation } from '@cdktn/provider-awscc'

ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.generateConfigForImport"></a>

```typescript
import { ec2IpamInternetRegistryAssociation } from '@cdktn/provider-awscc'

ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2IpamInternetRegistryAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2IpamInternetRegistryAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2IpamInternetRegistryAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamInternetRegistryAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.childRequestXml">childRequestXml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamInternetRegistryAssociationArn">ipamInternetRegistryAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamInternetRegistryAssociationId">ipamInternetRegistryAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamRegion">ipamRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList">Ec2IpamInternetRegistryAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamIdInput">ipamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.organizationHandleInput">organizationHandleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.rirInput">rirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamId">ipamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.organizationHandle">organizationHandle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.rir">rir</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `childRequestXml`<sup>Required</sup> <a name="childRequestXml" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.childRequestXml"></a>

```typescript
public readonly childRequestXml: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipamInternetRegistryAssociationArn`<sup>Required</sup> <a name="ipamInternetRegistryAssociationArn" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamInternetRegistryAssociationArn"></a>

```typescript
public readonly ipamInternetRegistryAssociationArn: string;
```

- *Type:* string

---

##### `ipamInternetRegistryAssociationId`<sup>Required</sup> <a name="ipamInternetRegistryAssociationId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamInternetRegistryAssociationId"></a>

```typescript
public readonly ipamInternetRegistryAssociationId: string;
```

- *Type:* string

---

##### `ipamRegion`<sup>Required</sup> <a name="ipamRegion" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamRegion"></a>

```typescript
public readonly ipamRegion: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.tags"></a>

```typescript
public readonly tags: Ec2IpamInternetRegistryAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList">Ec2IpamInternetRegistryAssociationTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `ipamIdInput`<sup>Optional</sup> <a name="ipamIdInput" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamIdInput"></a>

```typescript
public readonly ipamIdInput: string;
```

- *Type:* string

---

##### `organizationHandleInput`<sup>Optional</sup> <a name="organizationHandleInput" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.organizationHandleInput"></a>

```typescript
public readonly organizationHandleInput: string;
```

- *Type:* string

---

##### `rirInput`<sup>Optional</sup> <a name="rirInput" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.rirInput"></a>

```typescript
public readonly rirInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2IpamInternetRegistryAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ipamId`<sup>Required</sup> <a name="ipamId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.ipamId"></a>

```typescript
public readonly ipamId: string;
```

- *Type:* string

---

##### `organizationHandle`<sup>Required</sup> <a name="organizationHandle" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.organizationHandle"></a>

```typescript
public readonly organizationHandle: string;
```

- *Type:* string

---

##### `rir`<sup>Required</sup> <a name="rir" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.rir"></a>

```typescript
public readonly rir: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamInternetRegistryAssociationConfig <a name="Ec2IpamInternetRegistryAssociationConfig" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.Initializer"></a>

```typescript
import { ec2IpamInternetRegistryAssociation } from '@cdktn/provider-awscc'

const ec2IpamInternetRegistryAssociationConfig: ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.ipamId">ipamId</a></code> | <code>string</code> | The ID of the IPAM to associate with the internet registry. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.organizationHandle">organizationHandle</a></code> | <code>string</code> | The organization handle at the internet registry (for example, a RIPE NCC organization ID or ARIN Org ID). |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.rir">rir</a></code> | <code>string</code> | The Regional Internet Registry to associate with. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.description">description</a></code> | <code>string</code> | A description for the internet registry association. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a>[]</code> | The tags assigned to the internet registry association. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ipamId`<sup>Required</sup> <a name="ipamId" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.ipamId"></a>

```typescript
public readonly ipamId: string;
```

- *Type:* string

The ID of the IPAM to associate with the internet registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#ipam_id Ec2IpamInternetRegistryAssociation#ipam_id}

---

##### `organizationHandle`<sup>Required</sup> <a name="organizationHandle" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.organizationHandle"></a>

```typescript
public readonly organizationHandle: string;
```

- *Type:* string

The organization handle at the internet registry (for example, a RIPE NCC organization ID or ARIN Org ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#organization_handle Ec2IpamInternetRegistryAssociation#organization_handle}

---

##### `rir`<sup>Required</sup> <a name="rir" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.rir"></a>

```typescript
public readonly rir: string;
```

- *Type:* string

The Regional Internet Registry to associate with.

The service returns these values in upper case, so the enum uses the round-tripping form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#rir Ec2IpamInternetRegistryAssociation#rir}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the internet registry association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#description Ec2IpamInternetRegistryAssociation#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2IpamInternetRegistryAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a>[]

The tags assigned to the internet registry association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#tags Ec2IpamInternetRegistryAssociation#tags}

---

### Ec2IpamInternetRegistryAssociationTags <a name="Ec2IpamInternetRegistryAssociationTags" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags.Initializer"></a>

```typescript
import { ec2IpamInternetRegistryAssociation } from '@cdktn/provider-awscc'

const ec2IpamInternetRegistryAssociationTags: ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#key Ec2IpamInternetRegistryAssociation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#value Ec2IpamInternetRegistryAssociation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2IpamInternetRegistryAssociationTagsList <a name="Ec2IpamInternetRegistryAssociationTagsList" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.Initializer"></a>

```typescript
import { ec2IpamInternetRegistryAssociation } from '@cdktn/provider-awscc'

new ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.get"></a>

```typescript
public get(index: number): Ec2IpamInternetRegistryAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamInternetRegistryAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a>[]

---


### Ec2IpamInternetRegistryAssociationTagsOutputReference <a name="Ec2IpamInternetRegistryAssociationTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.Initializer"></a>

```typescript
import { ec2IpamInternetRegistryAssociation } from '@cdktn/provider-awscc'

new ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamInternetRegistryAssociationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamInternetRegistryAssociation.Ec2IpamInternetRegistryAssociationTags">Ec2IpamInternetRegistryAssociationTags</a>

---



