# `dataAwsccNetworkfirewallRuleGroup` Submodule <a name="`dataAwsccNetworkfirewallRuleGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkfirewallRuleGroup <a name="DataAwsccNetworkfirewallRuleGroup" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/networkfirewall_rule_group awscc_networkfirewall_rule_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup(scope: Construct, id: string, config: DataAwsccNetworkfirewallRuleGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig">DataAwsccNetworkfirewallRuleGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig">DataAwsccNetworkfirewallRuleGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkfirewallRuleGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isConstruct"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isTerraformElement"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.generateConfigForImport"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccNetworkfirewallRuleGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNetworkfirewallRuleGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNetworkfirewallRuleGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/networkfirewall_rule_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkfirewallRuleGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.ruleGroup">ruleGroup</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.ruleGroupArn">ruleGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.ruleGroupId">ruleGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.ruleGroupName">ruleGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.summaryConfiguration">summaryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference">DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList">DataAwsccNetworkfirewallRuleGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ruleGroup`<sup>Required</sup> <a name="ruleGroup" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.ruleGroup"></a>

```typescript
public readonly ruleGroup: DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference</a>

---

##### `ruleGroupArn`<sup>Required</sup> <a name="ruleGroupArn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.ruleGroupArn"></a>

```typescript
public readonly ruleGroupArn: string;
```

- *Type:* string

---

##### `ruleGroupId`<sup>Required</sup> <a name="ruleGroupId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.ruleGroupId"></a>

```typescript
public readonly ruleGroupId: string;
```

- *Type:* string

---

##### `ruleGroupName`<sup>Required</sup> <a name="ruleGroupName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.ruleGroupName"></a>

```typescript
public readonly ruleGroupName: string;
```

- *Type:* string

---

##### `summaryConfiguration`<sup>Required</sup> <a name="summaryConfiguration" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.summaryConfiguration"></a>

```typescript
public readonly summaryConfiguration: DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference">DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.tags"></a>

```typescript
public readonly tags: DataAwsccNetworkfirewallRuleGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList">DataAwsccNetworkfirewallRuleGroupTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkfirewallRuleGroupConfig <a name="DataAwsccNetworkfirewallRuleGroupConfig" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupConfig: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/networkfirewall_rule_group#id DataAwsccNetworkfirewallRuleGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkfirewallRuleGroupRuleGroup <a name="DataAwsccNetworkfirewallRuleGroupRuleGroup" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroup.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroup: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroup = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets = { ... }
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions = { ... }
```


### DataAwsccNetworkfirewallRuleGroupSummaryConfiguration <a name="DataAwsccNetworkfirewallRuleGroupSummaryConfiguration" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfiguration.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupSummaryConfiguration: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfiguration = { ... }
```


### DataAwsccNetworkfirewallRuleGroupTags <a name="DataAwsccNetworkfirewallRuleGroupTags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTags.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallRuleGroupTags: dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.referenceSets">referenceSets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.rulesSource">rulesSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.ruleVariables">ruleVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.statefulRuleOptions">statefulRuleOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroup">DataAwsccNetworkfirewallRuleGroupRuleGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `referenceSets`<sup>Required</sup> <a name="referenceSets" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.referenceSets"></a>

```typescript
public readonly referenceSets: DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference</a>

---

##### `rulesSource`<sup>Required</sup> <a name="rulesSource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.rulesSource"></a>

```typescript
public readonly rulesSource: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference</a>

---

##### `ruleVariables`<sup>Required</sup> <a name="ruleVariables" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.ruleVariables"></a>

```typescript
public readonly ruleVariables: DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference</a>

---

##### `statefulRuleOptions`<sup>Required</sup> <a name="statefulRuleOptions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.statefulRuleOptions"></a>

```typescript
public readonly statefulRuleOptions: DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroup;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroup">DataAwsccNetworkfirewallRuleGroupRuleGroup</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.get"></a>

```typescript
public get(key: string): DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.referenceArn">referenceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences">DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `referenceArn`<sup>Required</sup> <a name="referenceArn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.referenceArn"></a>

```typescript
public readonly referenceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences">DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.ipSetReferences">ipSetReferences</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap">DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets">DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipSetReferences`<sup>Required</sup> <a name="ipSetReferences" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.ipSetReferences"></a>

```typescript
public readonly ipSetReferences: DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap">DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets">DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.rulesSourceList">rulesSourceList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.rulesString">rulesString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.statefulRules">statefulRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.statelessRulesAndCustomActions">statelessRulesAndCustomActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rulesSourceList`<sup>Required</sup> <a name="rulesSourceList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.rulesSourceList"></a>

```typescript
public readonly rulesSourceList: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference</a>

---

##### `rulesString`<sup>Required</sup> <a name="rulesString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.rulesString"></a>

```typescript
public readonly rulesString: string;
```

- *Type:* string

---

##### `statefulRules`<sup>Required</sup> <a name="statefulRules" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.statefulRules"></a>

```typescript
public readonly statefulRules: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList</a>

---

##### `statelessRulesAndCustomActions`<sup>Required</sup> <a name="statelessRulesAndCustomActions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.statelessRulesAndCustomActions"></a>

```typescript
public readonly statelessRulesAndCustomActions: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.generatedRulesType">generatedRulesType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.targets">targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.targetTypes">targetTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generatedRulesType`<sup>Required</sup> <a name="generatedRulesType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.generatedRulesType"></a>

```typescript
public readonly generatedRulesType: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.targets"></a>

```typescript
public readonly targets: string[];
```

- *Type:* string[]

---

##### `targetTypes`<sup>Required</sup> <a name="targetTypes" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.targetTypes"></a>

```typescript
public readonly targetTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.destinationPort">destinationPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.sourcePort">sourcePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `destinationPort`<sup>Required</sup> <a name="destinationPort" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.destinationPort"></a>

```typescript
public readonly destinationPort: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `sourcePort`<sup>Required</sup> <a name="sourcePort" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.sourcePort"></a>

```typescript
public readonly sourcePort: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.header">header</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.ruleOptions">ruleOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.header"></a>

```typescript
public readonly header: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference</a>

---

##### `ruleOptions`<sup>Required</sup> <a name="ruleOptions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.ruleOptions"></a>

```typescript
public readonly ruleOptions: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.keyword">keyword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.settings">settings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.keyword"></a>

```typescript
public readonly keyword: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.settings"></a>

```typescript
public readonly settings: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.publishMetricAction">publishMetricAction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publishMetricAction`<sup>Required</sup> <a name="publishMetricAction" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.publishMetricAction"></a>

```typescript
public readonly publishMetricAction: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.actionDefinition">actionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.actionName">actionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionDefinition`<sup>Required</sup> <a name="actionDefinition" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.actionDefinition"></a>

```typescript
public readonly actionDefinition: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference</a>

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.customActions">customActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.statelessRules">statelessRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customActions`<sup>Required</sup> <a name="customActions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.customActions"></a>

```typescript
public readonly customActions: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList</a>

---

##### `statelessRules`<sup>Required</sup> <a name="statelessRules" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.statelessRules"></a>

```typescript
public readonly statelessRules: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.ruleDefinition">ruleDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `ruleDefinition`<sup>Required</sup> <a name="ruleDefinition" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.ruleDefinition"></a>

```typescript
public readonly ruleDefinition: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.addressDefinition">addressDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressDefinition`<sup>Required</sup> <a name="addressDefinition" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.addressDefinition"></a>

```typescript
public readonly addressDefinition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.destinationPorts">destinationPorts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.protocols">protocols</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.sourcePorts">sourcePorts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.tcpFlags">tcpFlags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList</a>

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.destinations"></a>

```typescript
public readonly destinations: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList</a>

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.protocols"></a>

```typescript
public readonly protocols: number[];
```

- *Type:* number[]

---

##### `sourcePorts`<sup>Required</sup> <a name="sourcePorts" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.sources"></a>

```typescript
public readonly sources: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList</a>

---

##### `tcpFlags`<sup>Required</sup> <a name="tcpFlags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.tcpFlags"></a>

```typescript
public readonly tcpFlags: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.addressDefinition">addressDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressDefinition`<sup>Required</sup> <a name="addressDefinition" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.addressDefinition"></a>

```typescript
public readonly addressDefinition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.flags">flags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.masks">masks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.flags"></a>

```typescript
public readonly flags: string[];
```

- *Type:* string[]

---

##### `masks`<sup>Required</sup> <a name="masks" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.masks"></a>

```typescript
public readonly masks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.matchAttributes">matchAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `matchAttributes`<sup>Required</sup> <a name="matchAttributes" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.matchAttributes"></a>

```typescript
public readonly matchAttributes: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.get"></a>

```typescript
public get(key: string): DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.definition">definition</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.definition"></a>

```typescript
public readonly definition: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.ipSets">ipSets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.portSets">portSets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipSets`<sup>Required</sup> <a name="ipSets" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.ipSets"></a>

```typescript
public readonly ipSets: DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap</a>

---

##### `portSets`<sup>Required</sup> <a name="portSets" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.portSets"></a>

```typescript
public readonly portSets: DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.get"></a>

```typescript
public get(key: string): DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.definition">definition</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.definition"></a>

```typescript
public readonly definition: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.ruleOrder">ruleOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions">DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ruleOrder`<sup>Required</sup> <a name="ruleOrder" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.ruleOrder"></a>

```typescript
public readonly ruleOrder: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions">DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions</a>

---


### DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference <a name="DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.ruleOptions">ruleOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfiguration">DataAwsccNetworkfirewallRuleGroupSummaryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ruleOptions`<sup>Required</sup> <a name="ruleOptions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.ruleOptions"></a>

```typescript
public readonly ruleOptions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupSummaryConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfiguration">DataAwsccNetworkfirewallRuleGroupSummaryConfiguration</a>

---


### DataAwsccNetworkfirewallRuleGroupTagsList <a name="DataAwsccNetworkfirewallRuleGroupTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallRuleGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallRuleGroupTagsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallRuleGroup } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTags">DataAwsccNetworkfirewallRuleGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallRuleGroupTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTags">DataAwsccNetworkfirewallRuleGroupTags</a>

---



