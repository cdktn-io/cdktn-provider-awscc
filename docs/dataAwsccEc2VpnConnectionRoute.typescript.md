# `dataAwsccEc2VpnConnectionRoute` Submodule <a name="`dataAwsccEc2VpnConnectionRoute` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2VpnConnectionRoute <a name="DataAwsccEc2VpnConnectionRoute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_vpn_connection_route awscc_ec2_vpn_connection_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnectionRoute } from '@cdktn/provider-awscc'

new dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute(scope: Construct, id: string, config: DataAwsccEc2VpnConnectionRouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig">DataAwsccEc2VpnConnectionRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig">DataAwsccEc2VpnConnectionRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2VpnConnectionRoute resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.isConstruct"></a>

```typescript
import { dataAwsccEc2VpnConnectionRoute } from '@cdktn/provider-awscc'

dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.isTerraformElement"></a>

```typescript
import { dataAwsccEc2VpnConnectionRoute } from '@cdktn/provider-awscc'

dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2VpnConnectionRoute } from '@cdktn/provider-awscc'

dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2VpnConnectionRoute } from '@cdktn/provider-awscc'

dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2VpnConnectionRoute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2VpnConnectionRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2VpnConnectionRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_vpn_connection_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2VpnConnectionRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.vpnConnectionId">vpnConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `destinationCidrBlock`<sup>Required</sup> <a name="destinationCidrBlock" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.destinationCidrBlock"></a>

```typescript
public readonly destinationCidrBlock: string;
```

- *Type:* string

---

##### `vpnConnectionId`<sup>Required</sup> <a name="vpnConnectionId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.vpnConnectionId"></a>

```typescript
public readonly vpnConnectionId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRoute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2VpnConnectionRouteConfig <a name="DataAwsccEc2VpnConnectionRouteConfig" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig.Initializer"></a>

```typescript
import { dataAwsccEc2VpnConnectionRoute } from '@cdktn/provider-awscc'

const dataAwsccEc2VpnConnectionRouteConfig: dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnectionRoute.DataAwsccEc2VpnConnectionRouteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_vpn_connection_route#id DataAwsccEc2VpnConnectionRoute#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



