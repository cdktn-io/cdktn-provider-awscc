# `ec2TransitGatewayAttachmentNatConfiguration` Submodule <a name="`ec2TransitGatewayAttachmentNatConfiguration` Submodule" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayAttachmentNatConfiguration <a name="Ec2TransitGatewayAttachmentNatConfiguration" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration awscc_ec2_transit_gateway_attachment_nat_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer"></a>

```typescript
import { ec2TransitGatewayAttachmentNatConfiguration } from '@cdktn/provider-awscc'

new ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration(scope: Construct, id: string, config: Ec2TransitGatewayAttachmentNatConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig">Ec2TransitGatewayAttachmentNatConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig">Ec2TransitGatewayAttachmentNatConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.putNatGatewayRules">putNatGatewayRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.resetNatSystemRouteSupport">resetNatSystemRouteSupport</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNatGatewayRules` <a name="putNatGatewayRules" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.putNatGatewayRules"></a>

```typescript
public putNatGatewayRules(value: IResolvable | Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.putNatGatewayRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a>[]

---

##### `resetNatSystemRouteSupport` <a name="resetNatSystemRouteSupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.resetNatSystemRouteSupport"></a>

```typescript
public resetNatSystemRouteSupport(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayAttachmentNatConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isConstruct"></a>

```typescript
import { ec2TransitGatewayAttachmentNatConfiguration } from '@cdktn/provider-awscc'

ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformElement"></a>

```typescript
import { ec2TransitGatewayAttachmentNatConfiguration } from '@cdktn/provider-awscc'

ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformResource"></a>

```typescript
import { ec2TransitGatewayAttachmentNatConfiguration } from '@cdktn/provider-awscc'

ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport"></a>

```typescript
import { ec2TransitGatewayAttachmentNatConfiguration } from '@cdktn/provider-awscc'

ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2TransitGatewayAttachmentNatConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TransitGatewayAttachmentNatConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TransitGatewayAttachmentNatConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayAttachmentNatConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewayRules">natGatewayRules</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewayRulesInput">natGatewayRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewaySupportInput">natGatewaySupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natSystemRouteSupportInput">natSystemRouteSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.transitGatewayAttachmentIdInput">transitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewaySupport">natGatewaySupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natSystemRouteSupport">natSystemRouteSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `natGatewayRules`<sup>Required</sup> <a name="natGatewayRules" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewayRules"></a>

```typescript
public readonly natGatewayRules: Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList</a>

---

##### `natGatewayRulesInput`<sup>Optional</sup> <a name="natGatewayRulesInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewayRulesInput"></a>

```typescript
public readonly natGatewayRulesInput: IResolvable | Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a>[]

---

##### `natGatewaySupportInput`<sup>Optional</sup> <a name="natGatewaySupportInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewaySupportInput"></a>

```typescript
public readonly natGatewaySupportInput: string;
```

- *Type:* string

---

##### `natSystemRouteSupportInput`<sup>Optional</sup> <a name="natSystemRouteSupportInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natSystemRouteSupportInput"></a>

```typescript
public readonly natSystemRouteSupportInput: string;
```

- *Type:* string

---

##### `transitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="transitGatewayAttachmentIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.transitGatewayAttachmentIdInput"></a>

```typescript
public readonly transitGatewayAttachmentIdInput: string;
```

- *Type:* string

---

##### `natGatewaySupport`<sup>Required</sup> <a name="natGatewaySupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewaySupport"></a>

```typescript
public readonly natGatewaySupport: string;
```

- *Type:* string

---

##### `natSystemRouteSupport`<sup>Required</sup> <a name="natSystemRouteSupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natSystemRouteSupport"></a>

```typescript
public readonly natSystemRouteSupport: string;
```

- *Type:* string

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayAttachmentNatConfigurationConfig <a name="Ec2TransitGatewayAttachmentNatConfigurationConfig" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.Initializer"></a>

```typescript
import { ec2TransitGatewayAttachmentNatConfiguration } from '@cdktn/provider-awscc'

const ec2TransitGatewayAttachmentNatConfigurationConfig: ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.natGatewayRules">natGatewayRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a>[]</code> | The complete set of NAT rules for the attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.natGatewaySupport">natGatewaySupport</a></code> | <code>string</code> | Whether NAT gateway support is enabled on the attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | The ID of the transit gateway attachment to configure NAT on. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.natSystemRouteSupport">natSystemRouteSupport</a></code> | <code>string</code> | Whether routes for the NAT CIDRs are installed into the transit gateway route tables associated with the attachment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `natGatewayRules`<sup>Required</sup> <a name="natGatewayRules" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.natGatewayRules"></a>

```typescript
public readonly natGatewayRules: IResolvable | Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a>[]

The complete set of NAT rules for the attachment.

Updating this property replaces the entire rule set: rules omitted from the new value are removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#nat_gateway_rules Ec2TransitGatewayAttachmentNatConfiguration#nat_gateway_rules}

---

##### `natGatewaySupport`<sup>Required</sup> <a name="natGatewaySupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.natGatewaySupport"></a>

```typescript
public readonly natGatewaySupport: string;
```

- *Type:* string

Whether NAT gateway support is enabled on the attachment.

Set to disable to stage NAT rules without activating them; the rules are retained and become active when this is later set to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#nat_gateway_support Ec2TransitGatewayAttachmentNatConfiguration#nat_gateway_support}

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

The ID of the transit gateway attachment to configure NAT on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#transit_gateway_attachment_id Ec2TransitGatewayAttachmentNatConfiguration#transit_gateway_attachment_id}

---

##### `natSystemRouteSupport`<sup>Optional</sup> <a name="natSystemRouteSupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.natSystemRouteSupport"></a>

```typescript
public readonly natSystemRouteSupport: string;
```

- *Type:* string

Whether routes for the NAT CIDRs are installed into the transit gateway route tables associated with the attachment.

Whether this is configurable depends on the attachment; where the value is forced, supplying the opposite value is rejected. Omitting this property leaves the setting to the service: on a new configuration the service applies the attachment's default, but on an attachment where the value is configurable it keeps the value already in effect rather than reverting to that default. Removing this property from a template, or deleting this resource, therefore leaves the setting at its last value rather than restoring the default, and a resource later created on the same attachment without this property inherits that value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#nat_system_route_support Ec2TransitGatewayAttachmentNatConfiguration#nat_system_route_support}

---

### Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules <a name="Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.Initializer"></a>

```typescript
import { ec2TransitGatewayAttachmentNatConfiguration } from '@cdktn/provider-awscc'

const ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules: ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.property.matchSourceCidr">matchSourceCidr</a></code> | <code>string</code> | The source CIDR that the rule matches on. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.property.natCidr">natCidr</a></code> | <code>string</code> | The CIDR that the matched source addresses are translated to. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.property.ruleNumber">ruleNumber</a></code> | <code>number</code> | The rule number. |

---

##### `matchSourceCidr`<sup>Required</sup> <a name="matchSourceCidr" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.property.matchSourceCidr"></a>

```typescript
public readonly matchSourceCidr: string;
```

- *Type:* string

The source CIDR that the rule matches on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#match_source_cidr Ec2TransitGatewayAttachmentNatConfiguration#match_source_cidr}

---

##### `natCidr`<sup>Required</sup> <a name="natCidr" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.property.natCidr"></a>

```typescript
public readonly natCidr: string;
```

- *Type:* string

The CIDR that the matched source addresses are translated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#nat_cidr Ec2TransitGatewayAttachmentNatConfiguration#nat_cidr}

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.property.ruleNumber"></a>

```typescript
public readonly ruleNumber: number;
```

- *Type:* number

The rule number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#rule_number Ec2TransitGatewayAttachmentNatConfiguration#rule_number}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList <a name="Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer"></a>

```typescript
import { ec2TransitGatewayAttachmentNatConfiguration } from '@cdktn/provider-awscc'

new ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.get"></a>

```typescript
public get(index: number): Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a>[]

---


### Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference <a name="Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer"></a>

```typescript
import { ec2TransitGatewayAttachmentNatConfiguration } from '@cdktn/provider-awscc'

new ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.matchSourceCidrInput">matchSourceCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.natCidrInput">natCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.ruleNumberInput">ruleNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.matchSourceCidr">matchSourceCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.natCidr">natCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.ruleNumber">ruleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchSourceCidrInput`<sup>Optional</sup> <a name="matchSourceCidrInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.matchSourceCidrInput"></a>

```typescript
public readonly matchSourceCidrInput: string;
```

- *Type:* string

---

##### `natCidrInput`<sup>Optional</sup> <a name="natCidrInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.natCidrInput"></a>

```typescript
public readonly natCidrInput: string;
```

- *Type:* string

---

##### `ruleNumberInput`<sup>Optional</sup> <a name="ruleNumberInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.ruleNumberInput"></a>

```typescript
public readonly ruleNumberInput: number;
```

- *Type:* number

---

##### `matchSourceCidr`<sup>Required</sup> <a name="matchSourceCidr" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.matchSourceCidr"></a>

```typescript
public readonly matchSourceCidr: string;
```

- *Type:* string

---

##### `natCidr`<sup>Required</sup> <a name="natCidr" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.natCidr"></a>

```typescript
public readonly natCidr: string;
```

- *Type:* string

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.ruleNumber"></a>

```typescript
public readonly ruleNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a>

---



