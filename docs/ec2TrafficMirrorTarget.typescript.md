# `ec2TrafficMirrorTarget` Submodule <a name="`ec2TrafficMirrorTarget` Submodule" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TrafficMirrorTarget <a name="Ec2TrafficMirrorTarget" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_target awscc_ec2_traffic_mirror_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer"></a>

```typescript
import { ec2TrafficMirrorTarget } from '@cdktn/provider-awscc'

new ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget(scope: Construct, id: string, config?: Ec2TrafficMirrorTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig">Ec2TrafficMirrorTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig">Ec2TrafficMirrorTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetGatewayLoadBalancerEndpointId">resetGatewayLoadBalancerEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetNetworkInterfaceId">resetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetNetworkLoadBalancerArn">resetNetworkLoadBalancerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2TrafficMirrorTargetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTags">Ec2TrafficMirrorTargetTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGatewayLoadBalancerEndpointId` <a name="resetGatewayLoadBalancerEndpointId" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetGatewayLoadBalancerEndpointId"></a>

```typescript
public resetGatewayLoadBalancerEndpointId(): void
```

##### `resetNetworkInterfaceId` <a name="resetNetworkInterfaceId" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetNetworkInterfaceId"></a>

```typescript
public resetNetworkInterfaceId(): void
```

##### `resetNetworkLoadBalancerArn` <a name="resetNetworkLoadBalancerArn" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetNetworkLoadBalancerArn"></a>

```typescript
public resetNetworkLoadBalancerArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TrafficMirrorTarget resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isConstruct"></a>

```typescript
import { ec2TrafficMirrorTarget } from '@cdktn/provider-awscc'

ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformElement"></a>

```typescript
import { ec2TrafficMirrorTarget } from '@cdktn/provider-awscc'

ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformResource"></a>

```typescript
import { ec2TrafficMirrorTarget } from '@cdktn/provider-awscc'

ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.generateConfigForImport"></a>

```typescript
import { ec2TrafficMirrorTarget } from '@cdktn/provider-awscc'

ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2TrafficMirrorTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TrafficMirrorTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TrafficMirrorTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TrafficMirrorTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList">Ec2TrafficMirrorTargetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.trafficMirrorTargetId">trafficMirrorTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.gatewayLoadBalancerEndpointIdInput">gatewayLoadBalancerEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkLoadBalancerArnInput">networkLoadBalancerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTags">Ec2TrafficMirrorTargetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.gatewayLoadBalancerEndpointId">gatewayLoadBalancerEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkLoadBalancerArn">networkLoadBalancerArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tags"></a>

```typescript
public readonly tags: Ec2TrafficMirrorTargetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList">Ec2TrafficMirrorTargetTagsList</a>

---

##### `trafficMirrorTargetId`<sup>Required</sup> <a name="trafficMirrorTargetId" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.trafficMirrorTargetId"></a>

```typescript
public readonly trafficMirrorTargetId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `gatewayLoadBalancerEndpointIdInput`<sup>Optional</sup> <a name="gatewayLoadBalancerEndpointIdInput" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.gatewayLoadBalancerEndpointIdInput"></a>

```typescript
public readonly gatewayLoadBalancerEndpointIdInput: string;
```

- *Type:* string

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `networkLoadBalancerArnInput`<sup>Optional</sup> <a name="networkLoadBalancerArnInput" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkLoadBalancerArnInput"></a>

```typescript
public readonly networkLoadBalancerArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2TrafficMirrorTargetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTags">Ec2TrafficMirrorTargetTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `gatewayLoadBalancerEndpointId`<sup>Required</sup> <a name="gatewayLoadBalancerEndpointId" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.gatewayLoadBalancerEndpointId"></a>

```typescript
public readonly gatewayLoadBalancerEndpointId: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `networkLoadBalancerArn`<sup>Required</sup> <a name="networkLoadBalancerArn" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.networkLoadBalancerArn"></a>

```typescript
public readonly networkLoadBalancerArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TrafficMirrorTargetConfig <a name="Ec2TrafficMirrorTargetConfig" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.Initializer"></a>

```typescript
import { ec2TrafficMirrorTarget } from '@cdktn/provider-awscc'

const ec2TrafficMirrorTargetConfig: ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.description">description</a></code> | <code>string</code> | The description of the Traffic Mirror target. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.gatewayLoadBalancerEndpointId">gatewayLoadBalancerEndpointId</a></code> | <code>string</code> | The ID of the Gateway Load Balancer endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | The network interface ID that is associated with the target. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.networkLoadBalancerArn">networkLoadBalancerArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTags">Ec2TrafficMirrorTargetTags</a>[]</code> | The tags to assign to the Traffic Mirror target. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the Traffic Mirror target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_target#description Ec2TrafficMirrorTarget#description}

---

##### `gatewayLoadBalancerEndpointId`<sup>Optional</sup> <a name="gatewayLoadBalancerEndpointId" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.gatewayLoadBalancerEndpointId"></a>

```typescript
public readonly gatewayLoadBalancerEndpointId: string;
```

- *Type:* string

The ID of the Gateway Load Balancer endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_target#gateway_load_balancer_endpoint_id Ec2TrafficMirrorTarget#gateway_load_balancer_endpoint_id}

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

The network interface ID that is associated with the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_target#network_interface_id Ec2TrafficMirrorTarget#network_interface_id}

---

##### `networkLoadBalancerArn`<sup>Optional</sup> <a name="networkLoadBalancerArn" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.networkLoadBalancerArn"></a>

```typescript
public readonly networkLoadBalancerArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_target#network_load_balancer_arn Ec2TrafficMirrorTarget#network_load_balancer_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2TrafficMirrorTargetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTags">Ec2TrafficMirrorTargetTags</a>[]

The tags to assign to the Traffic Mirror target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_target#tags Ec2TrafficMirrorTarget#tags}

---

### Ec2TrafficMirrorTargetTags <a name="Ec2TrafficMirrorTargetTags" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTags.Initializer"></a>

```typescript
import { ec2TrafficMirrorTarget } from '@cdktn/provider-awscc'

const ec2TrafficMirrorTargetTags: ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_target#key Ec2TrafficMirrorTarget#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_target#value Ec2TrafficMirrorTarget#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_target#key Ec2TrafficMirrorTarget#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_target#value Ec2TrafficMirrorTarget#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TrafficMirrorTargetTagsList <a name="Ec2TrafficMirrorTargetTagsList" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.Initializer"></a>

```typescript
import { ec2TrafficMirrorTarget } from '@cdktn/provider-awscc'

new ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.get"></a>

```typescript
public get(index: number): Ec2TrafficMirrorTargetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTags">Ec2TrafficMirrorTargetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2TrafficMirrorTargetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTags">Ec2TrafficMirrorTargetTags</a>[]

---


### Ec2TrafficMirrorTargetTagsOutputReference <a name="Ec2TrafficMirrorTargetTagsOutputReference" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.Initializer"></a>

```typescript
import { ec2TrafficMirrorTarget } from '@cdktn/provider-awscc'

new ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTags">Ec2TrafficMirrorTargetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2TrafficMirrorTargetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TrafficMirrorTarget.Ec2TrafficMirrorTargetTags">Ec2TrafficMirrorTargetTags</a>

---



