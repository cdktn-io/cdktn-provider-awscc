# `dataAwsccComputeoptimizerAutomationRule` Submodule <a name="`dataAwsccComputeoptimizerAutomationRule` Submodule" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccComputeoptimizerAutomationRule <a name="DataAwsccComputeoptimizerAutomationRule" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/computeoptimizer_automation_rule awscc_computeoptimizer_automation_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule(scope: Construct, id: string, config: DataAwsccComputeoptimizerAutomationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig">DataAwsccComputeoptimizerAutomationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig">DataAwsccComputeoptimizerAutomationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccComputeoptimizerAutomationRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isConstruct"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformElement"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformDataSource"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.generateConfigForImport"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccComputeoptimizerAutomationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccComputeoptimizerAutomationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccComputeoptimizerAutomationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/computeoptimizer_automation_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccComputeoptimizerAutomationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference">DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.organizationConfiguration">organizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference">DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.priority">priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.recommendedActionTypes">recommendedActionTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleRevision">ruleRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleType">ruleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference">DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList">DataAwsccComputeoptimizerAutomationRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.criteria"></a>

```typescript
public readonly criteria: DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference">DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.lastUpdatedTimestamp"></a>

```typescript
public readonly lastUpdatedTimestamp: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `organizationConfiguration`<sup>Required</sup> <a name="organizationConfiguration" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.organizationConfiguration"></a>

```typescript
public readonly organizationConfiguration: DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference">DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

---

##### `recommendedActionTypes`<sup>Required</sup> <a name="recommendedActionTypes" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.recommendedActionTypes"></a>

```typescript
public readonly recommendedActionTypes: string[];
```

- *Type:* string[]

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `ruleRevision`<sup>Required</sup> <a name="ruleRevision" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleRevision"></a>

```typescript
public readonly ruleRevision: string;
```

- *Type:* string

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.schedule"></a>

```typescript
public readonly schedule: DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference">DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.tags"></a>

```typescript
public readonly tags: DataAwsccComputeoptimizerAutomationRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList">DataAwsccComputeoptimizerAutomationRuleTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccComputeoptimizerAutomationRuleConfig <a name="DataAwsccComputeoptimizerAutomationRuleConfig" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const dataAwsccComputeoptimizerAutomationRuleConfig: dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/computeoptimizer_automation_rule#id DataAwsccComputeoptimizerAutomationRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccComputeoptimizerAutomationRuleCriteria <a name="DataAwsccComputeoptimizerAutomationRuleCriteria" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteria.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const dataAwsccComputeoptimizerAutomationRuleCriteria: dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteria = { ... }
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const dataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib: dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib = { ... }
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const dataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType: dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType = { ... }
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const dataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings: dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings = { ... }
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const dataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays: dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays = { ... }
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaRegion <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaRegion" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegion.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const dataAwsccComputeoptimizerAutomationRuleCriteriaRegion: dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegion = { ... }
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const dataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn: dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn = { ... }
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const dataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag: dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag = { ... }
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const dataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded: dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded = { ... }
```


### DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration <a name="DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const dataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration: dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration = { ... }
```


### DataAwsccComputeoptimizerAutomationRuleSchedule <a name="DataAwsccComputeoptimizerAutomationRuleSchedule" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleSchedule.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const dataAwsccComputeoptimizerAutomationRuleSchedule: dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleSchedule = { ... }
```


### DataAwsccComputeoptimizerAutomationRuleTags <a name="DataAwsccComputeoptimizerAutomationRuleTags" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTags.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const dataAwsccComputeoptimizerAutomationRuleTags: dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get"></a>

```typescript
public get(index: number): DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.values">values</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get"></a>

```typescript
public get(index: number): DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get"></a>

```typescript
public get(index: number): DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.values">values</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get"></a>

```typescript
public get(index: number): DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.values">values</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGib">ebsVolumeSizeInGib</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavings">estimatedMonthlySavings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList">DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDays">lookBackPeriodInDays</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList">DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.region">region</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList">DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArn">resourceArn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTag">resourceTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeeded">restartNeeded</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList">DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteria">DataAwsccComputeoptimizerAutomationRuleCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebsVolumeSizeInGib`<sup>Required</sup> <a name="ebsVolumeSizeInGib" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGib"></a>

```typescript
public readonly ebsVolumeSizeInGib: DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList</a>

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList</a>

---

##### `estimatedMonthlySavings`<sup>Required</sup> <a name="estimatedMonthlySavings" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavings"></a>

```typescript
public readonly estimatedMonthlySavings: DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList">DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList</a>

---

##### `lookBackPeriodInDays`<sup>Required</sup> <a name="lookBackPeriodInDays" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDays"></a>

```typescript
public readonly lookBackPeriodInDays: DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList">DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.region"></a>

```typescript
public readonly region: DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList">DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList</a>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList</a>

---

##### `resourceTag`<sup>Required</sup> <a name="resourceTag" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTag"></a>

```typescript
public readonly resourceTag: DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList</a>

---

##### `restartNeeded`<sup>Required</sup> <a name="restartNeeded" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeeded"></a>

```typescript
public readonly restartNeeded: DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList">DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComputeoptimizerAutomationRuleCriteria;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteria">DataAwsccComputeoptimizerAutomationRuleCriteria</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.get"></a>

```typescript
public get(index: number): DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegion">DataAwsccComputeoptimizerAutomationRuleCriteriaRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComputeoptimizerAutomationRuleCriteriaRegion;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegion">DataAwsccComputeoptimizerAutomationRuleCriteriaRegion</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.get"></a>

```typescript
public get(index: number): DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.get"></a>

```typescript
public get(index: number): DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.get"></a>

```typescript
public get(index: number): DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded">DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded">DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>

---


### DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIds">accountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrder">ruleApplyOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration">DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

---

##### `ruleApplyOrder`<sup>Required</sup> <a name="ruleApplyOrder" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrder"></a>

```typescript
public readonly ruleApplyOrder: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration">DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration</a>

---


### DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutes">executionWindowInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezone">scheduleExpressionTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleSchedule">DataAwsccComputeoptimizerAutomationRuleSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionWindowInMinutes`<sup>Required</sup> <a name="executionWindowInMinutes" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutes"></a>

```typescript
public readonly executionWindowInMinutes: number;
```

- *Type:* number

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `scheduleExpressionTimezone`<sup>Required</sup> <a name="scheduleExpressionTimezone" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezone"></a>

```typescript
public readonly scheduleExpressionTimezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComputeoptimizerAutomationRuleSchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleSchedule">DataAwsccComputeoptimizerAutomationRuleSchedule</a>

---


### DataAwsccComputeoptimizerAutomationRuleTagsList <a name="DataAwsccComputeoptimizerAutomationRuleTagsList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.get"></a>

```typescript
public get(index: number): DataAwsccComputeoptimizerAutomationRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccComputeoptimizerAutomationRuleTagsOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccComputeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTags">DataAwsccComputeoptimizerAutomationRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComputeoptimizerAutomationRuleTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTags">DataAwsccComputeoptimizerAutomationRuleTags</a>

---



