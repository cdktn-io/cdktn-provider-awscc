# `dataAwsccEc2NetworkInterface` Submodule <a name="`dataAwsccEc2NetworkInterface` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2NetworkInterface <a name="DataAwsccEc2NetworkInterface" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_network_interface awscc_ec2_network_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface(scope: Construct, id: string, config: DataAwsccEc2NetworkInterfaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig">DataAwsccEc2NetworkInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig">DataAwsccEc2NetworkInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2NetworkInterface resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.isConstruct"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.isTerraformElement"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2NetworkInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2NetworkInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2NetworkInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_network_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2NetworkInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.connectionTrackingSpecification">connectionTrackingSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference">DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.enablePrimaryIpv6">enablePrimaryIpv6</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.groupSet">groupSet</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.interfaceType">interfaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.ipv4PrefixCount">ipv4PrefixCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.ipv4Prefixes">ipv4Prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList">DataAwsccEc2NetworkInterfaceIpv4PrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.ipv6Addresses">ipv6Addresses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList">DataAwsccEc2NetworkInterfaceIpv6AddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.ipv6PrefixCount">ipv6PrefixCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.ipv6Prefixes">ipv6Prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList">DataAwsccEc2NetworkInterfaceIpv6PrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.primaryIpv6Address">primaryIpv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.primaryPrivateIpAddress">primaryPrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.privateIpAddresses">privateIpAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList">DataAwsccEc2NetworkInterfacePrivateIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.publicIpDnsHostnameTypeSpecification">publicIpDnsHostnameTypeSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.publicIpDnsNameOptions">publicIpDnsNameOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference">DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.secondaryPrivateIpAddressCount">secondaryPrivateIpAddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.secondaryPrivateIpAddresses">secondaryPrivateIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.sourceDestCheck">sourceDestCheck</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList">DataAwsccEc2NetworkInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `connectionTrackingSpecification`<sup>Required</sup> <a name="connectionTrackingSpecification" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.connectionTrackingSpecification"></a>

```typescript
public readonly connectionTrackingSpecification: DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference">DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enablePrimaryIpv6`<sup>Required</sup> <a name="enablePrimaryIpv6" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.enablePrimaryIpv6"></a>

```typescript
public readonly enablePrimaryIpv6: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `groupSet`<sup>Required</sup> <a name="groupSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.groupSet"></a>

```typescript
public readonly groupSet: string[];
```

- *Type:* string[]

---

##### `interfaceType`<sup>Required</sup> <a name="interfaceType" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.interfaceType"></a>

```typescript
public readonly interfaceType: string;
```

- *Type:* string

---

##### `ipv4PrefixCount`<sup>Required</sup> <a name="ipv4PrefixCount" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.ipv4PrefixCount"></a>

```typescript
public readonly ipv4PrefixCount: number;
```

- *Type:* number

---

##### `ipv4Prefixes`<sup>Required</sup> <a name="ipv4Prefixes" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.ipv4Prefixes"></a>

```typescript
public readonly ipv4Prefixes: DataAwsccEc2NetworkInterfaceIpv4PrefixesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList">DataAwsccEc2NetworkInterfaceIpv4PrefixesList</a>

---

##### `ipv6AddressCount`<sup>Required</sup> <a name="ipv6AddressCount" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.ipv6AddressCount"></a>

```typescript
public readonly ipv6AddressCount: number;
```

- *Type:* number

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: DataAwsccEc2NetworkInterfaceIpv6AddressesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList">DataAwsccEc2NetworkInterfaceIpv6AddressesList</a>

---

##### `ipv6PrefixCount`<sup>Required</sup> <a name="ipv6PrefixCount" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.ipv6PrefixCount"></a>

```typescript
public readonly ipv6PrefixCount: number;
```

- *Type:* number

---

##### `ipv6Prefixes`<sup>Required</sup> <a name="ipv6Prefixes" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.ipv6Prefixes"></a>

```typescript
public readonly ipv6Prefixes: DataAwsccEc2NetworkInterfaceIpv6PrefixesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList">DataAwsccEc2NetworkInterfaceIpv6PrefixesList</a>

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `primaryIpv6Address`<sup>Required</sup> <a name="primaryIpv6Address" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.primaryIpv6Address"></a>

```typescript
public readonly primaryIpv6Address: string;
```

- *Type:* string

---

##### `primaryPrivateIpAddress`<sup>Required</sup> <a name="primaryPrivateIpAddress" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.primaryPrivateIpAddress"></a>

```typescript
public readonly primaryPrivateIpAddress: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `privateIpAddresses`<sup>Required</sup> <a name="privateIpAddresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.privateIpAddresses"></a>

```typescript
public readonly privateIpAddresses: DataAwsccEc2NetworkInterfacePrivateIpAddressesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList">DataAwsccEc2NetworkInterfacePrivateIpAddressesList</a>

---

##### `publicIpDnsHostnameTypeSpecification`<sup>Required</sup> <a name="publicIpDnsHostnameTypeSpecification" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.publicIpDnsHostnameTypeSpecification"></a>

```typescript
public readonly publicIpDnsHostnameTypeSpecification: string;
```

- *Type:* string

---

##### `publicIpDnsNameOptions`<sup>Required</sup> <a name="publicIpDnsNameOptions" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.publicIpDnsNameOptions"></a>

```typescript
public readonly publicIpDnsNameOptions: DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference">DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference</a>

---

##### `secondaryPrivateIpAddressCount`<sup>Required</sup> <a name="secondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.secondaryPrivateIpAddressCount"></a>

```typescript
public readonly secondaryPrivateIpAddressCount: number;
```

- *Type:* number

---

##### `secondaryPrivateIpAddresses`<sup>Required</sup> <a name="secondaryPrivateIpAddresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.secondaryPrivateIpAddresses"></a>

```typescript
public readonly secondaryPrivateIpAddresses: string[];
```

- *Type:* string[]

---

##### `sourceDestCheck`<sup>Required</sup> <a name="sourceDestCheck" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.sourceDestCheck"></a>

```typescript
public readonly sourceDestCheck: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2NetworkInterfaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList">DataAwsccEc2NetworkInterfaceTagsList</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterface.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2NetworkInterfaceConfig <a name="DataAwsccEc2NetworkInterfaceConfig" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInterfaceConfig: dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_network_interface#id DataAwsccEc2NetworkInterface#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2NetworkInterfaceConnectionTrackingSpecification <a name="DataAwsccEc2NetworkInterfaceConnectionTrackingSpecification" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecification.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInterfaceConnectionTrackingSpecification: dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecification = { ... }
```


### DataAwsccEc2NetworkInterfaceIpv4Prefixes <a name="DataAwsccEc2NetworkInterfaceIpv4Prefixes" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4Prefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4Prefixes.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInterfaceIpv4Prefixes: dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4Prefixes = { ... }
```


### DataAwsccEc2NetworkInterfaceIpv6Addresses <a name="DataAwsccEc2NetworkInterfaceIpv6Addresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6Addresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6Addresses.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInterfaceIpv6Addresses: dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6Addresses = { ... }
```


### DataAwsccEc2NetworkInterfaceIpv6Prefixes <a name="DataAwsccEc2NetworkInterfaceIpv6Prefixes" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6Prefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6Prefixes.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInterfaceIpv6Prefixes: dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6Prefixes = { ... }
```


### DataAwsccEc2NetworkInterfacePrivateIpAddresses <a name="DataAwsccEc2NetworkInterfacePrivateIpAddresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddresses.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInterfacePrivateIpAddresses: dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddresses = { ... }
```


### DataAwsccEc2NetworkInterfacePublicIpDnsNameOptions <a name="DataAwsccEc2NetworkInterfacePublicIpDnsNameOptions" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptions.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInterfacePublicIpDnsNameOptions: dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptions = { ... }
```


### DataAwsccEc2NetworkInterfaceTags <a name="DataAwsccEc2NetworkInterfaceTags" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTags.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

const dataAwsccEc2NetworkInterfaceTags: dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference <a name="DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeout">tcpEstablishedTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpStreamTimeout">udpStreamTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpTimeout">udpTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecification">DataAwsccEc2NetworkInterfaceConnectionTrackingSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tcpEstablishedTimeout`<sup>Required</sup> <a name="tcpEstablishedTimeout" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeout"></a>

```typescript
public readonly tcpEstablishedTimeout: number;
```

- *Type:* number

---

##### `udpStreamTimeout`<sup>Required</sup> <a name="udpStreamTimeout" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpStreamTimeout"></a>

```typescript
public readonly udpStreamTimeout: number;
```

- *Type:* number

---

##### `udpTimeout`<sup>Required</sup> <a name="udpTimeout" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpTimeout"></a>

```typescript
public readonly udpTimeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInterfaceConnectionTrackingSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceConnectionTrackingSpecification">DataAwsccEc2NetworkInterfaceConnectionTrackingSpecification</a>

---


### DataAwsccEc2NetworkInterfaceIpv4PrefixesList <a name="DataAwsccEc2NetworkInterfaceIpv4PrefixesList" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference <a name="DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.property.ipv4Prefix">ipv4Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4Prefixes">DataAwsccEc2NetworkInterfaceIpv4Prefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv4Prefix`<sup>Required</sup> <a name="ipv4Prefix" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.property.ipv4Prefix"></a>

```typescript
public readonly ipv4Prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4PrefixesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInterfaceIpv4Prefixes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv4Prefixes">DataAwsccEc2NetworkInterfaceIpv4Prefixes</a>

---


### DataAwsccEc2NetworkInterfaceIpv6AddressesList <a name="DataAwsccEc2NetworkInterfaceIpv6AddressesList" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference <a name="DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6Addresses">DataAwsccEc2NetworkInterfaceIpv6Addresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6AddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInterfaceIpv6Addresses;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6Addresses">DataAwsccEc2NetworkInterfaceIpv6Addresses</a>

---


### DataAwsccEc2NetworkInterfaceIpv6PrefixesList <a name="DataAwsccEc2NetworkInterfaceIpv6PrefixesList" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference <a name="DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.property.ipv6Prefix">ipv6Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6Prefixes">DataAwsccEc2NetworkInterfaceIpv6Prefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6Prefix`<sup>Required</sup> <a name="ipv6Prefix" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.property.ipv6Prefix"></a>

```typescript
public readonly ipv6Prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6PrefixesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInterfaceIpv6Prefixes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceIpv6Prefixes">DataAwsccEc2NetworkInterfaceIpv6Prefixes</a>

---


### DataAwsccEc2NetworkInterfacePrivateIpAddressesList <a name="DataAwsccEc2NetworkInterfacePrivateIpAddressesList" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference <a name="DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.property.primary">primary</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddresses">DataAwsccEc2NetworkInterfacePrivateIpAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.property.primary"></a>

```typescript
public readonly primary: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInterfacePrivateIpAddresses;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePrivateIpAddresses">DataAwsccEc2NetworkInterfacePrivateIpAddresses</a>

---


### DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference <a name="DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.dnsHostnameType">dnsHostnameType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.publicDualStackDnsName">publicDualStackDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.publicIpv4DnsName">publicIpv4DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.publicIpv6DnsName">publicIpv6DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptions">DataAwsccEc2NetworkInterfacePublicIpDnsNameOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsHostnameType`<sup>Required</sup> <a name="dnsHostnameType" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.dnsHostnameType"></a>

```typescript
public readonly dnsHostnameType: string;
```

- *Type:* string

---

##### `publicDualStackDnsName`<sup>Required</sup> <a name="publicDualStackDnsName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.publicDualStackDnsName"></a>

```typescript
public readonly publicDualStackDnsName: string;
```

- *Type:* string

---

##### `publicIpv4DnsName`<sup>Required</sup> <a name="publicIpv4DnsName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.publicIpv4DnsName"></a>

```typescript
public readonly publicIpv4DnsName: string;
```

- *Type:* string

---

##### `publicIpv6DnsName`<sup>Required</sup> <a name="publicIpv6DnsName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.publicIpv6DnsName"></a>

```typescript
public readonly publicIpv6DnsName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInterfacePublicIpDnsNameOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfacePublicIpDnsNameOptions">DataAwsccEc2NetworkInterfacePublicIpDnsNameOptions</a>

---


### DataAwsccEc2NetworkInterfaceTagsList <a name="DataAwsccEc2NetworkInterfaceTagsList" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2NetworkInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2NetworkInterfaceTagsOutputReference <a name="DataAwsccEc2NetworkInterfaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2NetworkInterface } from '@cdktn/provider-awscc'

new dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTags">DataAwsccEc2NetworkInterfaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2NetworkInterfaceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterface.DataAwsccEc2NetworkInterfaceTags">DataAwsccEc2NetworkInterfaceTags</a>

---



