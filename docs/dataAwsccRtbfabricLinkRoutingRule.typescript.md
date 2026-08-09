# `dataAwsccRtbfabricLinkRoutingRule` Submodule <a name="`dataAwsccRtbfabricLinkRoutingRule` Submodule" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRtbfabricLinkRoutingRule <a name="DataAwsccRtbfabricLinkRoutingRule" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/rtbfabric_link_routing_rule awscc_rtbfabric_link_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule(scope: Construct, id: string, config: DataAwsccRtbfabricLinkRoutingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig">DataAwsccRtbfabricLinkRoutingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig">DataAwsccRtbfabricLinkRoutingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRtbfabricLinkRoutingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.isConstruct"></a>

```typescript
import { dataAwsccRtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.isTerraformElement"></a>

```typescript
import { dataAwsccRtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.isTerraformDataSource"></a>

```typescript
import { dataAwsccRtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.generateConfigForImport"></a>

```typescript
import { dataAwsccRtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRtbfabricLinkRoutingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRtbfabricLinkRoutingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRtbfabricLinkRoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/rtbfabric_link_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRtbfabricLinkRoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference">DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.linkId">linkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList">DataAwsccRtbfabricLinkRoutingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.updatedTimestamp">updatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.conditions"></a>

```typescript
public readonly conditions: DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference">DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference</a>

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.tags"></a>

```typescript
public readonly tags: DataAwsccRtbfabricLinkRoutingRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList">DataAwsccRtbfabricLinkRoutingRuleTagsList</a>

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.updatedTimestamp"></a>

```typescript
public readonly updatedTimestamp: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRtbfabricLinkRoutingRuleConditions <a name="DataAwsccRtbfabricLinkRoutingRuleConditions" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditions.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkRoutingRuleConditions: dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditions = { ... }
```


### DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEquals <a name="DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEquals" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEquals.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEquals: dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEquals = { ... }
```


### DataAwsccRtbfabricLinkRoutingRuleConfig <a name="DataAwsccRtbfabricLinkRoutingRuleConfig" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkRoutingRuleConfig: dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/rtbfabric_link_routing_rule#id DataAwsccRtbfabricLinkRoutingRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRtbfabricLinkRoutingRuleTags <a name="DataAwsccRtbfabricLinkRoutingRuleTags" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTags.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

const dataAwsccRtbfabricLinkRoutingRuleTags: dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference <a name="DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeader">hostHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcard">hostHeaderWildcard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExact">pathExact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefix">pathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEquals">queryStringEquals</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference">DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExists">queryStringExists</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditions">DataAwsccRtbfabricLinkRoutingRuleConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostHeader`<sup>Required</sup> <a name="hostHeader" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeader"></a>

```typescript
public readonly hostHeader: string;
```

- *Type:* string

---

##### `hostHeaderWildcard`<sup>Required</sup> <a name="hostHeaderWildcard" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcard"></a>

```typescript
public readonly hostHeaderWildcard: string;
```

- *Type:* string

---

##### `pathExact`<sup>Required</sup> <a name="pathExact" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExact"></a>

```typescript
public readonly pathExact: string;
```

- *Type:* string

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefix"></a>

```typescript
public readonly pathPrefix: string;
```

- *Type:* string

---

##### `queryStringEquals`<sup>Required</sup> <a name="queryStringEquals" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEquals"></a>

```typescript
public readonly queryStringEquals: DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference">DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference</a>

---

##### `queryStringExists`<sup>Required</sup> <a name="queryStringExists" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExists"></a>

```typescript
public readonly queryStringExists: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricLinkRoutingRuleConditions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditions">DataAwsccRtbfabricLinkRoutingRuleConditions</a>

---


### DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference <a name="DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEquals">DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEquals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEquals;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEquals">DataAwsccRtbfabricLinkRoutingRuleConditionsQueryStringEquals</a>

---


### DataAwsccRtbfabricLinkRoutingRuleTagsList <a name="DataAwsccRtbfabricLinkRoutingRuleTagsList" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.get"></a>

```typescript
public get(index: number): DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference <a name="DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

new dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTags">DataAwsccRtbfabricLinkRoutingRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRtbfabricLinkRoutingRuleTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLinkRoutingRule.DataAwsccRtbfabricLinkRoutingRuleTags">DataAwsccRtbfabricLinkRoutingRuleTags</a>

---



