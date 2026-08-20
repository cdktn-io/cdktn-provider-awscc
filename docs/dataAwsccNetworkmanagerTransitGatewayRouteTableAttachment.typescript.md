# `dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment` Submodule <a name="`dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/networkmanager_transit_gateway_route_table_attachment awscc_networkmanager_transit_gateway_route_table_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment(scope: Construct, id: string, config: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isConstruct"></a>

```typescript
import { dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment } from '@cdktn/provider-awscc'

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformElement"></a>

```typescript
import { dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment } from '@cdktn/provider-awscc'

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformDataSource"></a>

```typescript
import { dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment } from '@cdktn/provider-awscc'

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generateConfigForImport"></a>

```typescript
import { dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment } from '@cdktn/provider-awscc'

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/networkmanager_transit_gateway_route_table_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentId">attachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentType">attachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkArn">coreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.edgeLocation">edgeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.lastModificationErrors">lastModificationErrors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.ownerAccountId">ownerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.peeringId">peeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.proposedNetworkFunctionGroupChange">proposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.proposedSegmentChange">proposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.routingPolicyLabel">routingPolicyLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.segmentName">segmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.transitGatewayRouteTableArn">transitGatewayRouteTableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentId"></a>

```typescript
public readonly attachmentId: string;
```

- *Type:* string

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentType"></a>

```typescript
public readonly attachmentType: string;
```

- *Type:* string

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkArn"></a>

```typescript
public readonly coreNetworkArn: string;
```

- *Type:* string

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `edgeLocation`<sup>Required</sup> <a name="edgeLocation" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.edgeLocation"></a>

```typescript
public readonly edgeLocation: string;
```

- *Type:* string

---

##### `lastModificationErrors`<sup>Required</sup> <a name="lastModificationErrors" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.lastModificationErrors"></a>

```typescript
public readonly lastModificationErrors: string[];
```

- *Type:* string[]

---

##### `networkFunctionGroupName`<sup>Required</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.networkFunctionGroupName"></a>

```typescript
public readonly networkFunctionGroupName: string;
```

- *Type:* string

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.ownerAccountId"></a>

```typescript
public readonly ownerAccountId: string;
```

- *Type:* string

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.peeringId"></a>

```typescript
public readonly peeringId: string;
```

- *Type:* string

---

##### `proposedNetworkFunctionGroupChange`<sup>Required</sup> <a name="proposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.proposedNetworkFunctionGroupChange"></a>

```typescript
public readonly proposedNetworkFunctionGroupChange: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference</a>

---

##### `proposedSegmentChange`<sup>Required</sup> <a name="proposedSegmentChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.proposedSegmentChange"></a>

```typescript
public readonly proposedSegmentChange: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference</a>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `routingPolicyLabel`<sup>Required</sup> <a name="routingPolicyLabel" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.routingPolicyLabel"></a>

```typescript
public readonly routingPolicyLabel: string;
```

- *Type:* string

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.tags"></a>

```typescript
public readonly tags: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList</a>

---

##### `transitGatewayRouteTableArn`<sup>Required</sup> <a name="transitGatewayRouteTableArn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.transitGatewayRouteTableArn"></a>

```typescript
public readonly transitGatewayRouteTableArn: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment } from '@cdktn/provider-awscc'

const dataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig: dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/networkmanager_transit_gateway_route_table_attachment#id DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment } from '@cdktn/provider-awscc'

const dataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange: dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange = { ... }
```


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment } from '@cdktn/provider-awscc'

const dataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags: dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags = { ... }
```


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment } from '@cdktn/provider-awscc'

const dataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange: dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange = { ... }
```


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment } from '@cdktn/provider-awscc'

const dataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags: dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags = { ... }
```


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment } from '@cdktn/provider-awscc'

const dataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags: dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

---

##### `networkFunctionGroupName`<sup>Required</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName"></a>

```typescript
public readonly networkFunctionGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags"></a>

```typescript
public readonly tags: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange</a>

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags</a>

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.segmentName">segmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.tags"></a>

```typescript
public readonly tags: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange</a>

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags</a>

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags</a>

---



