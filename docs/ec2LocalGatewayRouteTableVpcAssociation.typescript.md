# `ec2LocalGatewayRouteTableVpcAssociation` Submodule <a name="`ec2LocalGatewayRouteTableVpcAssociation` Submodule" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2LocalGatewayRouteTableVpcAssociation <a name="Ec2LocalGatewayRouteTableVpcAssociation" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_route_table_vpc_association awscc_ec2_local_gateway_route_table_vpc_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer"></a>

```typescript
import { ec2LocalGatewayRouteTableVpcAssociation } from '@cdktn/provider-awscc'

new ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation(scope: Construct, id: string, config: Ec2LocalGatewayRouteTableVpcAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig">Ec2LocalGatewayRouteTableVpcAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig">Ec2LocalGatewayRouteTableVpcAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2LocalGatewayRouteTableVpcAssociationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2LocalGatewayRouteTableVpcAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isConstruct"></a>

```typescript
import { ec2LocalGatewayRouteTableVpcAssociation } from '@cdktn/provider-awscc'

ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformElement"></a>

```typescript
import { ec2LocalGatewayRouteTableVpcAssociation } from '@cdktn/provider-awscc'

ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformResource"></a>

```typescript
import { ec2LocalGatewayRouteTableVpcAssociation } from '@cdktn/provider-awscc'

ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport"></a>

```typescript
import { ec2LocalGatewayRouteTableVpcAssociation } from '@cdktn/provider-awscc'

ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2LocalGatewayRouteTableVpcAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2LocalGatewayRouteTableVpcAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2LocalGatewayRouteTableVpcAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_route_table_vpc_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2LocalGatewayRouteTableVpcAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayId">localGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableVpcAssociationId">localGatewayRouteTableVpcAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList">Ec2LocalGatewayRouteTableVpcAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableIdInput">localGatewayRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayId"></a>

```typescript
public readonly localGatewayId: string;
```

- *Type:* string

---

##### `localGatewayRouteTableVpcAssociationId`<sup>Required</sup> <a name="localGatewayRouteTableVpcAssociationId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableVpcAssociationId"></a>

```typescript
public readonly localGatewayRouteTableVpcAssociationId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tags"></a>

```typescript
public readonly tags: Ec2LocalGatewayRouteTableVpcAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList">Ec2LocalGatewayRouteTableVpcAssociationTagsList</a>

---

##### `localGatewayRouteTableIdInput`<sup>Optional</sup> <a name="localGatewayRouteTableIdInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableIdInput"></a>

```typescript
public readonly localGatewayRouteTableIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2LocalGatewayRouteTableVpcAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a>[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `localGatewayRouteTableId`<sup>Required</sup> <a name="localGatewayRouteTableId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableId"></a>

```typescript
public readonly localGatewayRouteTableId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2LocalGatewayRouteTableVpcAssociationConfig <a name="Ec2LocalGatewayRouteTableVpcAssociationConfig" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.Initializer"></a>

```typescript
import { ec2LocalGatewayRouteTableVpcAssociation } from '@cdktn/provider-awscc'

const ec2LocalGatewayRouteTableVpcAssociationConfig: ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>string</code> | The ID of the local gateway route table. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.vpcId">vpcId</a></code> | <code>string</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a>[]</code> | The tags for the association. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `localGatewayRouteTableId`<sup>Required</sup> <a name="localGatewayRouteTableId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.localGatewayRouteTableId"></a>

```typescript
public readonly localGatewayRouteTableId: string;
```

- *Type:* string

The ID of the local gateway route table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_route_table_vpc_association#local_gateway_route_table_id Ec2LocalGatewayRouteTableVpcAssociation#local_gateway_route_table_id}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_route_table_vpc_association#vpc_id Ec2LocalGatewayRouteTableVpcAssociation#vpc_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2LocalGatewayRouteTableVpcAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a>[]

The tags for the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_route_table_vpc_association#tags Ec2LocalGatewayRouteTableVpcAssociation#tags}

---

### Ec2LocalGatewayRouteTableVpcAssociationTags <a name="Ec2LocalGatewayRouteTableVpcAssociationTags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags.Initializer"></a>

```typescript
import { ec2LocalGatewayRouteTableVpcAssociation } from '@cdktn/provider-awscc'

const ec2LocalGatewayRouteTableVpcAssociationTags: ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_route_table_vpc_association#key Ec2LocalGatewayRouteTableVpcAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_route_table_vpc_association#value Ec2LocalGatewayRouteTableVpcAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_route_table_vpc_association#key Ec2LocalGatewayRouteTableVpcAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_route_table_vpc_association#value Ec2LocalGatewayRouteTableVpcAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2LocalGatewayRouteTableVpcAssociationTagsList <a name="Ec2LocalGatewayRouteTableVpcAssociationTagsList" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer"></a>

```typescript
import { ec2LocalGatewayRouteTableVpcAssociation } from '@cdktn/provider-awscc'

new ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.get"></a>

```typescript
public get(index: number): Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2LocalGatewayRouteTableVpcAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a>[]

---


### Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference <a name="Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer"></a>

```typescript
import { ec2LocalGatewayRouteTableVpcAssociation } from '@cdktn/provider-awscc'

new ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2LocalGatewayRouteTableVpcAssociationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags">Ec2LocalGatewayRouteTableVpcAssociationTags</a>

---



