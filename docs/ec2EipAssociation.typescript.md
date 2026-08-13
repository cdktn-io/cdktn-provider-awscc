# `ec2EipAssociation` Submodule <a name="`ec2EipAssociation` Submodule" id="@cdktn/provider-awscc.ec2EipAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2EipAssociation <a name="Ec2EipAssociation" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association awscc_ec2_eip_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer"></a>

```typescript
import { ec2EipAssociation } from '@cdktn/provider-awscc'

new ec2EipAssociation.Ec2EipAssociation(scope: Construct, id: string, config?: Ec2EipAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig">Ec2EipAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig">Ec2EipAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetAllocationId">resetAllocationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetEip">resetEip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetNetworkInterfaceId">resetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllocationId` <a name="resetAllocationId" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetAllocationId"></a>

```typescript
public resetAllocationId(): void
```

##### `resetEip` <a name="resetEip" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetEip"></a>

```typescript
public resetEip(): void
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetInstanceId"></a>

```typescript
public resetInstanceId(): void
```

##### `resetNetworkInterfaceId` <a name="resetNetworkInterfaceId" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetNetworkInterfaceId"></a>

```typescript
public resetNetworkInterfaceId(): void
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetPrivateIpAddress"></a>

```typescript
public resetPrivateIpAddress(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2EipAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.isConstruct"></a>

```typescript
import { ec2EipAssociation } from '@cdktn/provider-awscc'

ec2EipAssociation.Ec2EipAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.isTerraformElement"></a>

```typescript
import { ec2EipAssociation } from '@cdktn/provider-awscc'

ec2EipAssociation.Ec2EipAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.isTerraformResource"></a>

```typescript
import { ec2EipAssociation } from '@cdktn/provider-awscc'

ec2EipAssociation.Ec2EipAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.generateConfigForImport"></a>

```typescript
import { ec2EipAssociation } from '@cdktn/provider-awscc'

ec2EipAssociation.Ec2EipAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2EipAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2EipAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2EipAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2EipAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.eipAssociationId">eipAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.allocationIdInput">allocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.eipInput">eipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.allocationId">allocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.eip">eip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `eipAssociationId`<sup>Required</sup> <a name="eipAssociationId" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.eipAssociationId"></a>

```typescript
public readonly eipAssociationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `allocationIdInput`<sup>Optional</sup> <a name="allocationIdInput" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.allocationIdInput"></a>

```typescript
public readonly allocationIdInput: string;
```

- *Type:* string

---

##### `eipInput`<sup>Optional</sup> <a name="eipInput" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.eipInput"></a>

```typescript
public readonly eipInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.privateIpAddressInput"></a>

```typescript
public readonly privateIpAddressInput: string;
```

- *Type:* string

---

##### `allocationId`<sup>Required</sup> <a name="allocationId" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.allocationId"></a>

```typescript
public readonly allocationId: string;
```

- *Type:* string

---

##### `eip`<sup>Required</sup> <a name="eip" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.eip"></a>

```typescript
public readonly eip: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2EipAssociationConfig <a name="Ec2EipAssociationConfig" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.Initializer"></a>

```typescript
import { ec2EipAssociation } from '@cdktn/provider-awscc'

const ec2EipAssociationConfig: ec2EipAssociation.Ec2EipAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.allocationId">allocationId</a></code> | <code>string</code> | The allocation ID. This is required. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.eip">eip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#eip Ec2EipAssociation#eip}. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.instanceId">instanceId</a></code> | <code>string</code> | The ID of the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | The ID of the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | The primary or secondary private IP address to associate with the Elastic IP address. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allocationId`<sup>Optional</sup> <a name="allocationId" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.allocationId"></a>

```typescript
public readonly allocationId: string;
```

- *Type:* string

The allocation ID. This is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#allocation_id Ec2EipAssociation#allocation_id}

---

##### `eip`<sup>Optional</sup> <a name="eip" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.eip"></a>

```typescript
public readonly eip: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#eip Ec2EipAssociation#eip}.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The ID of the instance.

The instance must have exactly one attached network interface. You can specify either the instance ID or the network interface ID, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#instance_id Ec2EipAssociation#instance_id}

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

The ID of the network interface.

If the instance has more than one network interface, you must specify a network interface ID.
 You can specify either the instance ID or the network interface ID, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#network_interface_id Ec2EipAssociation#network_interface_id}

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

The primary or secondary private IP address to associate with the Elastic IP address.

If no private IP address is specified, the Elastic IP address is associated with the primary private IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#private_ip_address Ec2EipAssociation#private_ip_address}

---



