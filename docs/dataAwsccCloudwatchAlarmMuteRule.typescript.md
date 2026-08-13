# `dataAwsccCloudwatchAlarmMuteRule` Submodule <a name="`dataAwsccCloudwatchAlarmMuteRule` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudwatchAlarmMuteRule <a name="DataAwsccCloudwatchAlarmMuteRule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudwatch_alarm_mute_rule awscc_cloudwatch_alarm_mute_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlarmMuteRule } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule(scope: Construct, id: string, config: DataAwsccCloudwatchAlarmMuteRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig">DataAwsccCloudwatchAlarmMuteRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig">DataAwsccCloudwatchAlarmMuteRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudwatchAlarmMuteRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isConstruct"></a>

```typescript
import { dataAwsccCloudwatchAlarmMuteRule } from '@cdktn/provider-awscc'

dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformElement"></a>

```typescript
import { dataAwsccCloudwatchAlarmMuteRule } from '@cdktn/provider-awscc'

dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformDataSource"></a>

```typescript
import { dataAwsccCloudwatchAlarmMuteRule } from '@cdktn/provider-awscc'

dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport"></a>

```typescript
import { dataAwsccCloudwatchAlarmMuteRule } from '@cdktn/provider-awscc'

dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCloudwatchAlarmMuteRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudwatchAlarmMuteRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudwatchAlarmMuteRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudwatch_alarm_mute_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudwatchAlarmMuteRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.expireDate">expireDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.muteTargets">muteTargets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference">DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.muteType">muteType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference">DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList">DataAwsccCloudwatchAlarmMuteRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expireDate`<sup>Required</sup> <a name="expireDate" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.expireDate"></a>

```typescript
public readonly expireDate: string;
```

- *Type:* string

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.lastUpdatedTimestamp"></a>

```typescript
public readonly lastUpdatedTimestamp: string;
```

- *Type:* string

---

##### `muteTargets`<sup>Required</sup> <a name="muteTargets" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.muteTargets"></a>

```typescript
public readonly muteTargets: DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference">DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference</a>

---

##### `muteType`<sup>Required</sup> <a name="muteType" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.muteType"></a>

```typescript
public readonly muteType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.rule"></a>

```typescript
public readonly rule: DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference">DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference</a>

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.tags"></a>

```typescript
public readonly tags: DataAwsccCloudwatchAlarmMuteRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList">DataAwsccCloudwatchAlarmMuteRuleTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudwatchAlarmMuteRuleConfig <a name="DataAwsccCloudwatchAlarmMuteRuleConfig" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlarmMuteRule } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchAlarmMuteRuleConfig: dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudwatch_alarm_mute_rule#id DataAwsccCloudwatchAlarmMuteRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudwatchAlarmMuteRuleMuteTargets <a name="DataAwsccCloudwatchAlarmMuteRuleMuteTargets" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargets.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlarmMuteRule } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchAlarmMuteRuleMuteTargets: dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargets = { ... }
```


### DataAwsccCloudwatchAlarmMuteRuleRule <a name="DataAwsccCloudwatchAlarmMuteRuleRule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRule.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlarmMuteRule } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchAlarmMuteRuleRule: dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRule = { ... }
```


### DataAwsccCloudwatchAlarmMuteRuleRuleSchedule <a name="DataAwsccCloudwatchAlarmMuteRuleRuleSchedule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleSchedule.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlarmMuteRule } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchAlarmMuteRuleRuleSchedule: dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleSchedule = { ... }
```


### DataAwsccCloudwatchAlarmMuteRuleTags <a name="DataAwsccCloudwatchAlarmMuteRuleTags" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTags.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlarmMuteRule } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchAlarmMuteRuleTags: dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference <a name="DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlarmMuteRule } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNames">alarmNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargets">DataAwsccCloudwatchAlarmMuteRuleMuteTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmNames`<sup>Required</sup> <a name="alarmNames" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNames"></a>

```typescript
public readonly alarmNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudwatchAlarmMuteRuleMuteTargets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargets">DataAwsccCloudwatchAlarmMuteRuleMuteTargets</a>

---


### DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference <a name="DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlarmMuteRule } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference">DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRule">DataAwsccCloudwatchAlarmMuteRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.schedule"></a>

```typescript
public readonly schedule: DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference">DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudwatchAlarmMuteRuleRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRule">DataAwsccCloudwatchAlarmMuteRuleRule</a>

---


### DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference <a name="DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlarmMuteRule } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleSchedule">DataAwsccCloudwatchAlarmMuteRuleRuleSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudwatchAlarmMuteRuleRuleSchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleSchedule">DataAwsccCloudwatchAlarmMuteRuleRuleSchedule</a>

---


### DataAwsccCloudwatchAlarmMuteRuleTagsList <a name="DataAwsccCloudwatchAlarmMuteRuleTagsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlarmMuteRule } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.get"></a>

```typescript
public get(index: number): DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference <a name="DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlarmMuteRule } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTags">DataAwsccCloudwatchAlarmMuteRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudwatchAlarmMuteRuleTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTags">DataAwsccCloudwatchAlarmMuteRuleTags</a>

---



