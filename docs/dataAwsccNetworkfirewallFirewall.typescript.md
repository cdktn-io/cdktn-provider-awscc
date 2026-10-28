# `dataAwsccNetworkfirewallFirewall` Submodule <a name="`dataAwsccNetworkfirewallFirewall` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkfirewallFirewall <a name="DataAwsccNetworkfirewallFirewall" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/networkfirewall_firewall awscc_networkfirewall_firewall}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall(scope: Construct, id: string, config: DataAwsccNetworkfirewallFirewallConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig">DataAwsccNetworkfirewallFirewallConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig">DataAwsccNetworkfirewallFirewallConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkfirewallFirewall resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isConstruct"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isTerraformElement"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isTerraformDataSource"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.generateConfigForImport"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccNetworkfirewallFirewall resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNetworkfirewallFirewall to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNetworkfirewallFirewall that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/networkfirewall_firewall#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkfirewallFirewall to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.availabilityZoneChangeProtection">availabilityZoneChangeProtection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.availabilityZoneMappings">availabilityZoneMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList">DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.deleteProtection">deleteProtection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.enabledAnalysisTypes">enabledAnalysisTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.endpointIds">endpointIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallArn">firewallArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallId">firewallId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallName">firewallName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallPolicyArn">firewallPolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallPolicyChangeProtection">firewallPolicyChangeProtection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.natGatewayMappings">natGatewayMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList">DataAwsccNetworkfirewallFirewallNatGatewayMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.noSourcePreservation">noSourcePreservation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.numberOfAssociations">numberOfAssociations</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.proxySettings">proxySettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference">DataAwsccNetworkfirewallFirewallProxySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.subnetChangeProtection">subnetChangeProtection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.subnetMappings">subnetMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList">DataAwsccNetworkfirewallFirewallSubnetMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList">DataAwsccNetworkfirewallFirewallTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.vpcEndpoint">vpcEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference">DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `availabilityZoneChangeProtection`<sup>Required</sup> <a name="availabilityZoneChangeProtection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.availabilityZoneChangeProtection"></a>

```typescript
public readonly availabilityZoneChangeProtection: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `availabilityZoneMappings`<sup>Required</sup> <a name="availabilityZoneMappings" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.availabilityZoneMappings"></a>

```typescript
public readonly availabilityZoneMappings: DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList">DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList</a>

---

##### `deleteProtection`<sup>Required</sup> <a name="deleteProtection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.deleteProtection"></a>

```typescript
public readonly deleteProtection: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabledAnalysisTypes`<sup>Required</sup> <a name="enabledAnalysisTypes" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.enabledAnalysisTypes"></a>

```typescript
public readonly enabledAnalysisTypes: string[];
```

- *Type:* string[]

---

##### `endpointIds`<sup>Required</sup> <a name="endpointIds" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.endpointIds"></a>

```typescript
public readonly endpointIds: string[];
```

- *Type:* string[]

---

##### `firewallArn`<sup>Required</sup> <a name="firewallArn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallArn"></a>

```typescript
public readonly firewallArn: string;
```

- *Type:* string

---

##### `firewallId`<sup>Required</sup> <a name="firewallId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallId"></a>

```typescript
public readonly firewallId: string;
```

- *Type:* string

---

##### `firewallName`<sup>Required</sup> <a name="firewallName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallName"></a>

```typescript
public readonly firewallName: string;
```

- *Type:* string

---

##### `firewallPolicyArn`<sup>Required</sup> <a name="firewallPolicyArn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallPolicyArn"></a>

```typescript
public readonly firewallPolicyArn: string;
```

- *Type:* string

---

##### `firewallPolicyChangeProtection`<sup>Required</sup> <a name="firewallPolicyChangeProtection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallPolicyChangeProtection"></a>

```typescript
public readonly firewallPolicyChangeProtection: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `natGatewayMappings`<sup>Required</sup> <a name="natGatewayMappings" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.natGatewayMappings"></a>

```typescript
public readonly natGatewayMappings: DataAwsccNetworkfirewallFirewallNatGatewayMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList">DataAwsccNetworkfirewallFirewallNatGatewayMappingsList</a>

---

##### `noSourcePreservation`<sup>Required</sup> <a name="noSourcePreservation" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.noSourcePreservation"></a>

```typescript
public readonly noSourcePreservation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `numberOfAssociations`<sup>Required</sup> <a name="numberOfAssociations" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.numberOfAssociations"></a>

```typescript
public readonly numberOfAssociations: number;
```

- *Type:* number

---

##### `proxySettings`<sup>Required</sup> <a name="proxySettings" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.proxySettings"></a>

```typescript
public readonly proxySettings: DataAwsccNetworkfirewallFirewallProxySettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference">DataAwsccNetworkfirewallFirewallProxySettingsOutputReference</a>

---

##### `subnetChangeProtection`<sup>Required</sup> <a name="subnetChangeProtection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.subnetChangeProtection"></a>

```typescript
public readonly subnetChangeProtection: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `subnetMappings`<sup>Required</sup> <a name="subnetMappings" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.subnetMappings"></a>

```typescript
public readonly subnetMappings: DataAwsccNetworkfirewallFirewallSubnetMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList">DataAwsccNetworkfirewallFirewallSubnetMappingsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.tags"></a>

```typescript
public readonly tags: DataAwsccNetworkfirewallFirewallTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList">DataAwsccNetworkfirewallFirewallTagsList</a>

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `vpcEndpoint`<sup>Required</sup> <a name="vpcEndpoint" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.vpcEndpoint"></a>

```typescript
public readonly vpcEndpoint: DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference">DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings <a name="DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallAvailabilityZoneMappings: dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings = { ... }
```


### DataAwsccNetworkfirewallFirewallConfig <a name="DataAwsccNetworkfirewallFirewallConfig" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallConfig: dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/networkfirewall_firewall#id DataAwsccNetworkfirewallFirewall#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkfirewallFirewallNatGatewayMappings <a name="DataAwsccNetworkfirewallFirewallNatGatewayMappings" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappings.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallNatGatewayMappings: dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappings = { ... }
```


### DataAwsccNetworkfirewallFirewallProxySettings <a name="DataAwsccNetworkfirewallFirewallProxySettings" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettings.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallProxySettings: dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettings = { ... }
```


### DataAwsccNetworkfirewallFirewallProxySettingsListenerProperties <a name="DataAwsccNetworkfirewallFirewallProxySettingsListenerProperties" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerProperties.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallProxySettingsListenerProperties: dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerProperties = { ... }
```


### DataAwsccNetworkfirewallFirewallSubnetMappings <a name="DataAwsccNetworkfirewallFirewallSubnetMappings" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappings.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallSubnetMappings: dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappings = { ... }
```


### DataAwsccNetworkfirewallFirewallTags <a name="DataAwsccNetworkfirewallFirewallTags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTags.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallTags: dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTags = { ... }
```


### DataAwsccNetworkfirewallFirewallVpcEndpoint <a name="DataAwsccNetworkfirewallFirewallVpcEndpoint" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpoint.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallVpcEndpoint: dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpoint = { ... }
```


### DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappings <a name="DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappings" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappings.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappings: dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList <a name="DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference <a name="DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings">DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings">DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings</a>

---


### DataAwsccNetworkfirewallFirewallNatGatewayMappingsList <a name="DataAwsccNetworkfirewallFirewallNatGatewayMappingsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference <a name="DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.property.natGatewayId">natGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappings">DataAwsccNetworkfirewallFirewallNatGatewayMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `natGatewayId`<sup>Required</sup> <a name="natGatewayId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.property.natGatewayId"></a>

```typescript
public readonly natGatewayId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallNatGatewayMappings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallNatGatewayMappings">DataAwsccNetworkfirewallFirewallNatGatewayMappings</a>

---


### DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList <a name="DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference <a name="DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerProperties">DataAwsccNetworkfirewallFirewallProxySettingsListenerProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallProxySettingsListenerProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerProperties">DataAwsccNetworkfirewallFirewallProxySettingsListenerProperties</a>

---


### DataAwsccNetworkfirewallFirewallProxySettingsOutputReference <a name="DataAwsccNetworkfirewallFirewallProxySettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.property.listenerProperties">listenerProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList">DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettings">DataAwsccNetworkfirewallFirewallProxySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `listenerProperties`<sup>Required</sup> <a name="listenerProperties" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.property.listenerProperties"></a>

```typescript
public readonly listenerProperties: DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList">DataAwsccNetworkfirewallFirewallProxySettingsListenerPropertiesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallProxySettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallProxySettings">DataAwsccNetworkfirewallFirewallProxySettings</a>

---


### DataAwsccNetworkfirewallFirewallSubnetMappingsList <a name="DataAwsccNetworkfirewallFirewallSubnetMappingsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference <a name="DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappings">DataAwsccNetworkfirewallFirewallSubnetMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallSubnetMappings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappings">DataAwsccNetworkfirewallFirewallSubnetMappings</a>

---


### DataAwsccNetworkfirewallFirewallTagsList <a name="DataAwsccNetworkfirewallFirewallTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallFirewallTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallFirewallTagsOutputReference <a name="DataAwsccNetworkfirewallFirewallTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTags">DataAwsccNetworkfirewallFirewallTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTags">DataAwsccNetworkfirewallFirewallTags</a>

---


### DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference <a name="DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.property.subnetMappings">subnetMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList">DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpoint">DataAwsccNetworkfirewallFirewallVpcEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetMappings`<sup>Required</sup> <a name="subnetMappings" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.property.subnetMappings"></a>

```typescript
public readonly subnetMappings: DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList">DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallVpcEndpoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpoint">DataAwsccNetworkfirewallFirewallVpcEndpoint</a>

---


### DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList <a name="DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference <a name="DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewall } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappings">DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappings">DataAwsccNetworkfirewallFirewallVpcEndpointSubnetMappings</a>

---



