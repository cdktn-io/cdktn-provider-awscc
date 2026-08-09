# `dataAwsccEc2VpcEndpoint` Submodule <a name="`dataAwsccEc2VpcEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2VpcEndpoint <a name="DataAwsccEc2VpcEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_vpc_endpoint awscc_ec2_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer"></a>

```typescript
import { dataAwsccEc2VpcEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint(scope: Construct, id: string, config: DataAwsccEc2VpcEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig">DataAwsccEc2VpcEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig">DataAwsccEc2VpcEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2VpcEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isConstruct"></a>

```typescript
import { dataAwsccEc2VpcEndpoint } from '@cdktn/provider-awscc'

dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isTerraformElement"></a>

```typescript
import { dataAwsccEc2VpcEndpoint } from '@cdktn/provider-awscc'

dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2VpcEndpoint } from '@cdktn/provider-awscc'

dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2VpcEndpoint } from '@cdktn/provider-awscc'

dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2VpcEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2VpcEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2VpcEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_vpc_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2VpcEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.dnsEntries">dnsEntries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.dnsOptions">dnsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference">DataAwsccEc2VpcEndpointDnsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.privateDnsEnabled">privateDnsEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.resourceConfigurationArn">resourceConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.routeTableIds">routeTableIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.serviceRegion">serviceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList">DataAwsccEc2VpcEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.vpcEndpointType">vpcEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `dnsEntries`<sup>Required</sup> <a name="dnsEntries" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.dnsEntries"></a>

```typescript
public readonly dnsEntries: string[];
```

- *Type:* string[]

---

##### `dnsOptions`<sup>Required</sup> <a name="dnsOptions" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.dnsOptions"></a>

```typescript
public readonly dnsOptions: DataAwsccEc2VpcEndpointDnsOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference">DataAwsccEc2VpcEndpointDnsOptionsOutputReference</a>

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.networkInterfaceIds"></a>

```typescript
public readonly networkInterfaceIds: string[];
```

- *Type:* string[]

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

##### `privateDnsEnabled`<sup>Required</sup> <a name="privateDnsEnabled" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.privateDnsEnabled"></a>

```typescript
public readonly privateDnsEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `resourceConfigurationArn`<sup>Required</sup> <a name="resourceConfigurationArn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.resourceConfigurationArn"></a>

```typescript
public readonly resourceConfigurationArn: string;
```

- *Type:* string

---

##### `routeTableIds`<sup>Required</sup> <a name="routeTableIds" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.routeTableIds"></a>

```typescript
public readonly routeTableIds: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `serviceNetworkArn`<sup>Required</sup> <a name="serviceNetworkArn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.serviceNetworkArn"></a>

```typescript
public readonly serviceNetworkArn: string;
```

- *Type:* string

---

##### `serviceRegion`<sup>Required</sup> <a name="serviceRegion" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.serviceRegion"></a>

```typescript
public readonly serviceRegion: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2VpcEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList">DataAwsccEc2VpcEndpointTagsList</a>

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `vpcEndpointType`<sup>Required</sup> <a name="vpcEndpointType" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.vpcEndpointType"></a>

```typescript
public readonly vpcEndpointType: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2VpcEndpointConfig <a name="DataAwsccEc2VpcEndpointConfig" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.Initializer"></a>

```typescript
import { dataAwsccEc2VpcEndpoint } from '@cdktn/provider-awscc'

const dataAwsccEc2VpcEndpointConfig: dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_vpc_endpoint#id DataAwsccEc2VpcEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2VpcEndpointDnsOptions <a name="DataAwsccEc2VpcEndpointDnsOptions" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptions.Initializer"></a>

```typescript
import { dataAwsccEc2VpcEndpoint } from '@cdktn/provider-awscc'

const dataAwsccEc2VpcEndpointDnsOptions: dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptions = { ... }
```


### DataAwsccEc2VpcEndpointTags <a name="DataAwsccEc2VpcEndpointTags" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTags.Initializer"></a>

```typescript
import { dataAwsccEc2VpcEndpoint } from '@cdktn/provider-awscc'

const dataAwsccEc2VpcEndpointTags: dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2VpcEndpointDnsOptionsOutputReference <a name="DataAwsccEc2VpcEndpointDnsOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VpcEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType">dnsRecordIpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint">privateDnsOnlyForInboundResolverEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreference">privateDnsPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomains">privateDnsSpecifiedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptions">DataAwsccEc2VpcEndpointDnsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsRecordIpType`<sup>Required</sup> <a name="dnsRecordIpType" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType"></a>

```typescript
public readonly dnsRecordIpType: string;
```

- *Type:* string

---

##### `privateDnsOnlyForInboundResolverEndpoint`<sup>Required</sup> <a name="privateDnsOnlyForInboundResolverEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint"></a>

```typescript
public readonly privateDnsOnlyForInboundResolverEndpoint: string;
```

- *Type:* string

---

##### `privateDnsPreference`<sup>Required</sup> <a name="privateDnsPreference" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreference"></a>

```typescript
public readonly privateDnsPreference: string;
```

- *Type:* string

---

##### `privateDnsSpecifiedDomains`<sup>Required</sup> <a name="privateDnsSpecifiedDomains" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomains"></a>

```typescript
public readonly privateDnsSpecifiedDomains: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VpcEndpointDnsOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptions">DataAwsccEc2VpcEndpointDnsOptions</a>

---


### DataAwsccEc2VpcEndpointTagsList <a name="DataAwsccEc2VpcEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2VpcEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2VpcEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2VpcEndpointTagsOutputReference <a name="DataAwsccEc2VpcEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2VpcEndpoint } from '@cdktn/provider-awscc'

new dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTags">DataAwsccEc2VpcEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2VpcEndpointTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTags">DataAwsccEc2VpcEndpointTags</a>

---



