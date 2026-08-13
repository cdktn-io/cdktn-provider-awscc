# `dataAwsccEc2IpamResourceDiscovery` Submodule <a name="`dataAwsccEc2IpamResourceDiscovery` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2IpamResourceDiscovery <a name="DataAwsccEc2IpamResourceDiscovery" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_ipam_resource_discovery awscc_ec2_ipam_resource_discovery}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscovery } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery(scope: Construct, id: string, config: DataAwsccEc2IpamResourceDiscoveryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig">DataAwsccEc2IpamResourceDiscoveryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig">DataAwsccEc2IpamResourceDiscoveryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2IpamResourceDiscovery resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isConstruct"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscovery } from '@cdktn/provider-awscc'

dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isTerraformElement"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscovery } from '@cdktn/provider-awscc'

dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscovery } from '@cdktn/provider-awscc'

dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscovery } from '@cdktn/provider-awscc'

dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2IpamResourceDiscovery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2IpamResourceDiscovery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2IpamResourceDiscovery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_ipam_resource_discovery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2IpamResourceDiscovery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.ipamResourceDiscoveryArn">ipamResourceDiscoveryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.ipamResourceDiscoveryId">ipamResourceDiscoveryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.ipamResourceDiscoveryRegion">ipamResourceDiscoveryRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.isDefault">isDefault</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.operatingRegions">operatingRegions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList">DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.organizationalUnitExclusions">organizationalUnitExclusions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList">DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList">DataAwsccEc2IpamResourceDiscoveryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ipamResourceDiscoveryArn`<sup>Required</sup> <a name="ipamResourceDiscoveryArn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.ipamResourceDiscoveryArn"></a>

```typescript
public readonly ipamResourceDiscoveryArn: string;
```

- *Type:* string

---

##### `ipamResourceDiscoveryId`<sup>Required</sup> <a name="ipamResourceDiscoveryId" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.ipamResourceDiscoveryId"></a>

```typescript
public readonly ipamResourceDiscoveryId: string;
```

- *Type:* string

---

##### `ipamResourceDiscoveryRegion`<sup>Required</sup> <a name="ipamResourceDiscoveryRegion" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.ipamResourceDiscoveryRegion"></a>

```typescript
public readonly ipamResourceDiscoveryRegion: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `operatingRegions`<sup>Required</sup> <a name="operatingRegions" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.operatingRegions"></a>

```typescript
public readonly operatingRegions: DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList">DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList</a>

---

##### `organizationalUnitExclusions`<sup>Required</sup> <a name="organizationalUnitExclusions" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.organizationalUnitExclusions"></a>

```typescript
public readonly organizationalUnitExclusions: DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList">DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList</a>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2IpamResourceDiscoveryTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList">DataAwsccEc2IpamResourceDiscoveryTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2IpamResourceDiscoveryConfig <a name="DataAwsccEc2IpamResourceDiscoveryConfig" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.Initializer"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscovery } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamResourceDiscoveryConfig: dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_ipam_resource_discovery#id DataAwsccEc2IpamResourceDiscovery#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2IpamResourceDiscoveryOperatingRegions <a name="DataAwsccEc2IpamResourceDiscoveryOperatingRegions" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegions.Initializer"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscovery } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamResourceDiscoveryOperatingRegions: dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegions = { ... }
```


### DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions <a name="DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions.Initializer"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscovery } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions: dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions = { ... }
```


### DataAwsccEc2IpamResourceDiscoveryTags <a name="DataAwsccEc2IpamResourceDiscoveryTags" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTags.Initializer"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscovery } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamResourceDiscoveryTags: dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList <a name="DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.Initializer"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscovery } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference <a name="DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscovery } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegions">DataAwsccEc2IpamResourceDiscoveryOperatingRegions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2IpamResourceDiscoveryOperatingRegions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegions">DataAwsccEc2IpamResourceDiscoveryOperatingRegions</a>

---


### DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList <a name="DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscovery } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference <a name="DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscovery } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPath">organizationsEntityPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions">DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `organizationsEntityPath`<sup>Required</sup> <a name="organizationsEntityPath" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPath"></a>

```typescript
public readonly organizationsEntityPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions">DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions</a>

---


### DataAwsccEc2IpamResourceDiscoveryTagsList <a name="DataAwsccEc2IpamResourceDiscoveryTagsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscovery } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2IpamResourceDiscoveryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2IpamResourceDiscoveryTagsOutputReference <a name="DataAwsccEc2IpamResourceDiscoveryTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscovery } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTags">DataAwsccEc2IpamResourceDiscoveryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2IpamResourceDiscoveryTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTags">DataAwsccEc2IpamResourceDiscoveryTags</a>

---



