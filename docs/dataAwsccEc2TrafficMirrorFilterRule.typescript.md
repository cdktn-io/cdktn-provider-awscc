# `dataAwsccEc2TrafficMirrorFilterRule` Submodule <a name="`dataAwsccEc2TrafficMirrorFilterRule` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2TrafficMirrorFilterRule <a name="DataAwsccEc2TrafficMirrorFilterRule" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_traffic_mirror_filter_rule awscc_ec2_traffic_mirror_filter_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.Initializer"></a>

```typescript
import { dataAwsccEc2TrafficMirrorFilterRule } from '@cdktn/provider-awscc'

new dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule(scope: Construct, id: string, config: DataAwsccEc2TrafficMirrorFilterRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig">DataAwsccEc2TrafficMirrorFilterRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig">DataAwsccEc2TrafficMirrorFilterRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2TrafficMirrorFilterRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.isConstruct"></a>

```typescript
import { dataAwsccEc2TrafficMirrorFilterRule } from '@cdktn/provider-awscc'

dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.isTerraformElement"></a>

```typescript
import { dataAwsccEc2TrafficMirrorFilterRule } from '@cdktn/provider-awscc'

dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2TrafficMirrorFilterRule } from '@cdktn/provider-awscc'

dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2TrafficMirrorFilterRule } from '@cdktn/provider-awscc'

dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2TrafficMirrorFilterRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2TrafficMirrorFilterRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2TrafficMirrorFilterRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_traffic_mirror_filter_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2TrafficMirrorFilterRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference">DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.protocol">protocol</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.ruleAction">ruleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.ruleNumber">ruleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.sourceCidrBlock">sourceCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference">DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList">DataAwsccEc2TrafficMirrorFilterRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.trafficDirection">trafficDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.trafficMirrorFilterId">trafficMirrorFilterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.trafficMirrorFilterRuleId">trafficMirrorFilterRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationCidrBlock`<sup>Required</sup> <a name="destinationCidrBlock" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.destinationCidrBlock"></a>

```typescript
public readonly destinationCidrBlock: string;
```

- *Type:* string

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference">DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.protocol"></a>

```typescript
public readonly protocol: number;
```

- *Type:* number

---

##### `ruleAction`<sup>Required</sup> <a name="ruleAction" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.ruleAction"></a>

```typescript
public readonly ruleAction: string;
```

- *Type:* string

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.ruleNumber"></a>

```typescript
public readonly ruleNumber: number;
```

- *Type:* number

---

##### `sourceCidrBlock`<sup>Required</sup> <a name="sourceCidrBlock" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.sourceCidrBlock"></a>

```typescript
public readonly sourceCidrBlock: string;
```

- *Type:* string

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference">DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2TrafficMirrorFilterRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList">DataAwsccEc2TrafficMirrorFilterRuleTagsList</a>

---

##### `trafficDirection`<sup>Required</sup> <a name="trafficDirection" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.trafficDirection"></a>

```typescript
public readonly trafficDirection: string;
```

- *Type:* string

---

##### `trafficMirrorFilterId`<sup>Required</sup> <a name="trafficMirrorFilterId" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.trafficMirrorFilterId"></a>

```typescript
public readonly trafficMirrorFilterId: string;
```

- *Type:* string

---

##### `trafficMirrorFilterRuleId`<sup>Required</sup> <a name="trafficMirrorFilterRuleId" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.trafficMirrorFilterRuleId"></a>

```typescript
public readonly trafficMirrorFilterRuleId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2TrafficMirrorFilterRuleConfig <a name="DataAwsccEc2TrafficMirrorFilterRuleConfig" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig.Initializer"></a>

```typescript
import { dataAwsccEc2TrafficMirrorFilterRule } from '@cdktn/provider-awscc'

const dataAwsccEc2TrafficMirrorFilterRuleConfig: dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_traffic_mirror_filter_rule#id DataAwsccEc2TrafficMirrorFilterRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRange <a name="DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRange" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRange.Initializer"></a>

```typescript
import { dataAwsccEc2TrafficMirrorFilterRule } from '@cdktn/provider-awscc'

const dataAwsccEc2TrafficMirrorFilterRuleDestinationPortRange: dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRange = { ... }
```


### DataAwsccEc2TrafficMirrorFilterRuleSourcePortRange <a name="DataAwsccEc2TrafficMirrorFilterRuleSourcePortRange" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRange.Initializer"></a>

```typescript
import { dataAwsccEc2TrafficMirrorFilterRule } from '@cdktn/provider-awscc'

const dataAwsccEc2TrafficMirrorFilterRuleSourcePortRange: dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRange = { ... }
```


### DataAwsccEc2TrafficMirrorFilterRuleTags <a name="DataAwsccEc2TrafficMirrorFilterRuleTags" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTags.Initializer"></a>

```typescript
import { dataAwsccEc2TrafficMirrorFilterRule } from '@cdktn/provider-awscc'

const dataAwsccEc2TrafficMirrorFilterRuleTags: dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference <a name="DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2TrafficMirrorFilterRule } from '@cdktn/provider-awscc'

new dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRange">DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRange">DataAwsccEc2TrafficMirrorFilterRuleDestinationPortRange</a>

---


### DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference <a name="DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2TrafficMirrorFilterRule } from '@cdktn/provider-awscc'

new dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRange">DataAwsccEc2TrafficMirrorFilterRuleSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2TrafficMirrorFilterRuleSourcePortRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleSourcePortRange">DataAwsccEc2TrafficMirrorFilterRuleSourcePortRange</a>

---


### DataAwsccEc2TrafficMirrorFilterRuleTagsList <a name="DataAwsccEc2TrafficMirrorFilterRuleTagsList" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2TrafficMirrorFilterRule } from '@cdktn/provider-awscc'

new dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference <a name="DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2TrafficMirrorFilterRule } from '@cdktn/provider-awscc'

new dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTags">DataAwsccEc2TrafficMirrorFilterRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2TrafficMirrorFilterRuleTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorFilterRule.DataAwsccEc2TrafficMirrorFilterRuleTags">DataAwsccEc2TrafficMirrorFilterRuleTags</a>

---



