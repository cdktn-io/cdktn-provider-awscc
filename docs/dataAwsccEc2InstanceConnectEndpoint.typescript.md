# `dataAwsccEc2InstanceConnectEndpoint` Submodule <a name="`dataAwsccEc2InstanceConnectEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2InstanceConnectEndpoint <a name="DataAwsccEc2InstanceConnectEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_instance_connect_endpoint awscc_ec2_instance_connect_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer"></a>

```typescript
import { dataAwsccEc2InstanceConnectEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint(scope: Construct, id: string, config: DataAwsccEc2InstanceConnectEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig">DataAwsccEc2InstanceConnectEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig">DataAwsccEc2InstanceConnectEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2InstanceConnectEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isConstruct"></a>

```typescript
import { dataAwsccEc2InstanceConnectEndpoint } from '@cdktn/provider-awscc'

dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformElement"></a>

```typescript
import { dataAwsccEc2InstanceConnectEndpoint } from '@cdktn/provider-awscc'

dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2InstanceConnectEndpoint } from '@cdktn/provider-awscc'

dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2InstanceConnectEndpoint } from '@cdktn/provider-awscc'

dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2InstanceConnectEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2InstanceConnectEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2InstanceConnectEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_instance_connect_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2InstanceConnectEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.instanceConnectEndpointArn">instanceConnectEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.instanceConnectEndpointId">instanceConnectEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.preserveClientIp">preserveClientIp</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.publicDnsNames">publicDnsNames</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList">DataAwsccEc2InstanceConnectEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `instanceConnectEndpointArn`<sup>Required</sup> <a name="instanceConnectEndpointArn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.instanceConnectEndpointArn"></a>

```typescript
public readonly instanceConnectEndpointArn: string;
```

- *Type:* string

---

##### `instanceConnectEndpointId`<sup>Required</sup> <a name="instanceConnectEndpointId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.instanceConnectEndpointId"></a>

```typescript
public readonly instanceConnectEndpointId: string;
```

- *Type:* string

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.networkInterfaceIds"></a>

```typescript
public readonly networkInterfaceIds: string[];
```

- *Type:* string[]

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `preserveClientIp`<sup>Required</sup> <a name="preserveClientIp" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.preserveClientIp"></a>

```typescript
public readonly preserveClientIp: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `publicDnsNames`<sup>Required</sup> <a name="publicDnsNames" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.publicDnsNames"></a>

```typescript
public readonly publicDnsNames: DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference</a>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2InstanceConnectEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList">DataAwsccEc2InstanceConnectEndpointTagsList</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2InstanceConnectEndpointConfig <a name="DataAwsccEc2InstanceConnectEndpointConfig" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.Initializer"></a>

```typescript
import { dataAwsccEc2InstanceConnectEndpoint } from '@cdktn/provider-awscc'

const dataAwsccEc2InstanceConnectEndpointConfig: dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_instance_connect_endpoint#id DataAwsccEc2InstanceConnectEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2InstanceConnectEndpointPublicDnsNames <a name="DataAwsccEc2InstanceConnectEndpointPublicDnsNames" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNames.Initializer"></a>

```typescript
import { dataAwsccEc2InstanceConnectEndpoint } from '@cdktn/provider-awscc'

const dataAwsccEc2InstanceConnectEndpointPublicDnsNames: dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNames = { ... }
```


### DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack <a name="DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack.Initializer"></a>

```typescript
import { dataAwsccEc2InstanceConnectEndpoint } from '@cdktn/provider-awscc'

const dataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack: dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack = { ... }
```


### DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4 <a name="DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4.Initializer"></a>

```typescript
import { dataAwsccEc2InstanceConnectEndpoint } from '@cdktn/provider-awscc'

const dataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4: dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4 = { ... }
```


### DataAwsccEc2InstanceConnectEndpointTags <a name="DataAwsccEc2InstanceConnectEndpointTags" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTags.Initializer"></a>

```typescript
import { dataAwsccEc2InstanceConnectEndpoint } from '@cdktn/provider-awscc'

const dataAwsccEc2InstanceConnectEndpointTags: dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference <a name="DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2InstanceConnectEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fipsDnsName">fipsDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `fipsDnsName`<sup>Required</sup> <a name="fipsDnsName" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fipsDnsName"></a>

```typescript
public readonly fipsDnsName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack</a>

---


### DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference <a name="DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2InstanceConnectEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fipsDnsName">fipsDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `fipsDnsName`<sup>Required</sup> <a name="fipsDnsName" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fipsDnsName"></a>

```typescript
public readonly fipsDnsName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4</a>

---


### DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference <a name="DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2InstanceConnectEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.dualstack">dualstack</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.ipv4">ipv4</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNames">DataAwsccEc2InstanceConnectEndpointPublicDnsNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dualstack`<sup>Required</sup> <a name="dualstack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.dualstack"></a>

```typescript
public readonly dualstack: DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference</a>

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.ipv4"></a>

```typescript
public readonly ipv4: DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2InstanceConnectEndpointPublicDnsNames;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNames">DataAwsccEc2InstanceConnectEndpointPublicDnsNames</a>

---


### DataAwsccEc2InstanceConnectEndpointTagsList <a name="DataAwsccEc2InstanceConnectEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2InstanceConnectEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2InstanceConnectEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2InstanceConnectEndpointTagsOutputReference <a name="DataAwsccEc2InstanceConnectEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2InstanceConnectEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTags">DataAwsccEc2InstanceConnectEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2InstanceConnectEndpointTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTags">DataAwsccEc2InstanceConnectEndpointTags</a>

---



