# `dataAwsccNetworkfirewallFirewallPolicy` Submodule <a name="`dataAwsccNetworkfirewallFirewallPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkfirewallFirewallPolicy <a name="DataAwsccNetworkfirewallFirewallPolicy" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/networkfirewall_firewall_policy awscc_networkfirewall_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy(scope: Construct, id: string, config: DataAwsccNetworkfirewallFirewallPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig">DataAwsccNetworkfirewallFirewallPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig">DataAwsccNetworkfirewallFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkfirewallFirewallPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.isConstruct"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.isTerraformElement"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.isTerraformDataSource"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.generateConfigForImport"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccNetworkfirewallFirewallPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNetworkfirewallFirewallPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNetworkfirewallFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/networkfirewall_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkfirewallFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.firewallPolicy">firewallPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.firewallPolicyArn">firewallPolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.firewallPolicyId">firewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.firewallPolicyName">firewallPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList">DataAwsccNetworkfirewallFirewallPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.firewallPolicy"></a>

```typescript
public readonly firewallPolicy: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference</a>

---

##### `firewallPolicyArn`<sup>Required</sup> <a name="firewallPolicyArn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.firewallPolicyArn"></a>

```typescript
public readonly firewallPolicyArn: string;
```

- *Type:* string

---

##### `firewallPolicyId`<sup>Required</sup> <a name="firewallPolicyId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.firewallPolicyId"></a>

```typescript
public readonly firewallPolicyId: string;
```

- *Type:* string

---

##### `firewallPolicyName`<sup>Required</sup> <a name="firewallPolicyName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.firewallPolicyName"></a>

```typescript
public readonly firewallPolicyName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.tags"></a>

```typescript
public readonly tags: DataAwsccNetworkfirewallFirewallPolicyTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList">DataAwsccNetworkfirewallFirewallPolicyTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkfirewallFirewallPolicyConfig <a name="DataAwsccNetworkfirewallFirewallPolicyConfig" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallPolicyConfig: dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/networkfirewall_firewall_policy#id DataAwsccNetworkfirewallFirewallPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicy <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicy" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicy.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallPolicyFirewallPolicy: dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicy = { ... }
```


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables: dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables = { ... }
```


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables: dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables = { ... }
```


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions: dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions = { ... }
```


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts: dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts = { ... }
```


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences: dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences = { ... }
```


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride: dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride = { ... }
```


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions: dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions = { ... }
```


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition: dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition = { ... }
```


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction: dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction = { ... }
```


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions: dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions = { ... }
```


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences: dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences = { ... }
```


### DataAwsccNetworkfirewallFirewallPolicyTags <a name="DataAwsccNetworkfirewallFirewallPolicyTags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTags.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallFirewallPolicyTags: dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.enableTlsSessionHolding">enableTlsSessionHolding</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.policyVariables">policyVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulDefaultActions">statefulDefaultActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulEngineOptions">statefulEngineOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulRuleGroupReferences">statefulRuleGroupReferences</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessCustomActions">statelessCustomActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessDefaultActions">statelessDefaultActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessFragmentDefaultActions">statelessFragmentDefaultActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessRuleGroupReferences">statelessRuleGroupReferences</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.tlsInspectionConfigurationArn">tlsInspectionConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicy">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableTlsSessionHolding`<sup>Required</sup> <a name="enableTlsSessionHolding" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.enableTlsSessionHolding"></a>

```typescript
public readonly enableTlsSessionHolding: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `policyVariables`<sup>Required</sup> <a name="policyVariables" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.policyVariables"></a>

```typescript
public readonly policyVariables: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference</a>

---

##### `statefulDefaultActions`<sup>Required</sup> <a name="statefulDefaultActions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulDefaultActions"></a>

```typescript
public readonly statefulDefaultActions: string[];
```

- *Type:* string[]

---

##### `statefulEngineOptions`<sup>Required</sup> <a name="statefulEngineOptions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulEngineOptions"></a>

```typescript
public readonly statefulEngineOptions: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference</a>

---

##### `statefulRuleGroupReferences`<sup>Required</sup> <a name="statefulRuleGroupReferences" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulRuleGroupReferences"></a>

```typescript
public readonly statefulRuleGroupReferences: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList</a>

---

##### `statelessCustomActions`<sup>Required</sup> <a name="statelessCustomActions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessCustomActions"></a>

```typescript
public readonly statelessCustomActions: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList</a>

---

##### `statelessDefaultActions`<sup>Required</sup> <a name="statelessDefaultActions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessDefaultActions"></a>

```typescript
public readonly statelessDefaultActions: string[];
```

- *Type:* string[]

---

##### `statelessFragmentDefaultActions`<sup>Required</sup> <a name="statelessFragmentDefaultActions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessFragmentDefaultActions"></a>

```typescript
public readonly statelessFragmentDefaultActions: string[];
```

- *Type:* string[]

---

##### `statelessRuleGroupReferences`<sup>Required</sup> <a name="statelessRuleGroupReferences" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessRuleGroupReferences"></a>

```typescript
public readonly statelessRuleGroupReferences: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList</a>

---

##### `tlsInspectionConfigurationArn`<sup>Required</sup> <a name="tlsInspectionConfigurationArn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.tlsInspectionConfigurationArn"></a>

```typescript
public readonly tlsInspectionConfigurationArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicy">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicy</a>

---


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.ruleVariables">ruleVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ruleVariables`<sup>Required</sup> <a name="ruleVariables" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.ruleVariables"></a>

```typescript
public readonly ruleVariables: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a>

---


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.get"></a>

```typescript
public get(key: string): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.definition">definition</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.definition"></a>

```typescript
public readonly definition: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a>

---


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.tcpIdleTimeoutSeconds">tcpIdleTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tcpIdleTimeoutSeconds`<sup>Required</sup> <a name="tcpIdleTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.tcpIdleTimeoutSeconds"></a>

```typescript
public readonly tcpIdleTimeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts</a>

---


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.flowTimeouts">flowTimeouts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.ruleOrder">ruleOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.streamExceptionPolicy">streamExceptionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flowTimeouts`<sup>Required</sup> <a name="flowTimeouts" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.flowTimeouts"></a>

```typescript
public readonly flowTimeouts: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference</a>

---

##### `ruleOrder`<sup>Required</sup> <a name="ruleOrder" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.ruleOrder"></a>

```typescript
public readonly ruleOrder: string;
```

- *Type:* string

---

##### `streamExceptionPolicy`<sup>Required</sup> <a name="streamExceptionPolicy" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.streamExceptionPolicy"></a>

```typescript
public readonly streamExceptionPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a>

---


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.deepThreatInspection">deepThreatInspection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.override">override</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deepThreatInspection`<sup>Required</sup> <a name="deepThreatInspection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.deepThreatInspection"></a>

```typescript
public readonly deepThreatInspection: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.override"></a>

```typescript
public readonly override: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a>

---


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride</a>

---


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.publishMetricAction">publishMetricAction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publishMetricAction`<sup>Required</sup> <a name="publishMetricAction" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.publishMetricAction"></a>

```typescript
public readonly publishMetricAction: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition</a>

---


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a>

---


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction</a>

---


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionDefinition">actionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionName">actionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionDefinition`<sup>Required</sup> <a name="actionDefinition" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionDefinition"></a>

```typescript
public readonly actionDefinition: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference</a>

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a>

---


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference <a name="DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a>

---


### DataAwsccNetworkfirewallFirewallPolicyTagsList <a name="DataAwsccNetworkfirewallFirewallPolicyTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference <a name="DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallFirewallPolicy } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTags">DataAwsccNetworkfirewallFirewallPolicyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallFirewallPolicyTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewallPolicy.DataAwsccNetworkfirewallFirewallPolicyTags">DataAwsccNetworkfirewallFirewallPolicyTags</a>

---



