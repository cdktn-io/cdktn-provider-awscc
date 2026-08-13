# `dataAwsccBillingconductorPricingRule` Submodule <a name="`dataAwsccBillingconductorPricingRule` Submodule" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBillingconductorPricingRule <a name="DataAwsccBillingconductorPricingRule" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/billingconductor_pricing_rule awscc_billingconductor_pricing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.Initializer"></a>

```typescript
import { dataAwsccBillingconductorPricingRule } from '@cdktn/provider-awscc'

new dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule(scope: Construct, id: string, config: DataAwsccBillingconductorPricingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig">DataAwsccBillingconductorPricingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig">DataAwsccBillingconductorPricingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBillingconductorPricingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.isConstruct"></a>

```typescript
import { dataAwsccBillingconductorPricingRule } from '@cdktn/provider-awscc'

dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.isTerraformElement"></a>

```typescript
import { dataAwsccBillingconductorPricingRule } from '@cdktn/provider-awscc'

dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.isTerraformDataSource"></a>

```typescript
import { dataAwsccBillingconductorPricingRule } from '@cdktn/provider-awscc'

dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.generateConfigForImport"></a>

```typescript
import { dataAwsccBillingconductorPricingRule } from '@cdktn/provider-awscc'

dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBillingconductorPricingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBillingconductorPricingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBillingconductorPricingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/billingconductor_pricing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBillingconductorPricingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.associatedPricingPlanCount">associatedPricingPlanCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.billingEntity">billingEntity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.creationTime">creationTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.lastModifiedTime">lastModifiedTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.modifierPercentage">modifierPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList">DataAwsccBillingconductorPricingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.tiering">tiering</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference">DataAwsccBillingconductorPricingRuleTieringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.usageType">usageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associatedPricingPlanCount`<sup>Required</sup> <a name="associatedPricingPlanCount" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.associatedPricingPlanCount"></a>

```typescript
public readonly associatedPricingPlanCount: number;
```

- *Type:* number

---

##### `billingEntity`<sup>Required</sup> <a name="billingEntity" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.billingEntity"></a>

```typescript
public readonly billingEntity: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: number;
```

- *Type:* number

---

##### `modifierPercentage`<sup>Required</sup> <a name="modifierPercentage" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.modifierPercentage"></a>

```typescript
public readonly modifierPercentage: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.tags"></a>

```typescript
public readonly tags: DataAwsccBillingconductorPricingRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList">DataAwsccBillingconductorPricingRuleTagsList</a>

---

##### `tiering`<sup>Required</sup> <a name="tiering" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.tiering"></a>

```typescript
public readonly tiering: DataAwsccBillingconductorPricingRuleTieringOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference">DataAwsccBillingconductorPricingRuleTieringOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `usageType`<sup>Required</sup> <a name="usageType" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.usageType"></a>

```typescript
public readonly usageType: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBillingconductorPricingRuleConfig <a name="DataAwsccBillingconductorPricingRuleConfig" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig.Initializer"></a>

```typescript
import { dataAwsccBillingconductorPricingRule } from '@cdktn/provider-awscc'

const dataAwsccBillingconductorPricingRuleConfig: dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/billingconductor_pricing_rule#id DataAwsccBillingconductorPricingRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBillingconductorPricingRuleTags <a name="DataAwsccBillingconductorPricingRuleTags" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTags.Initializer"></a>

```typescript
import { dataAwsccBillingconductorPricingRule } from '@cdktn/provider-awscc'

const dataAwsccBillingconductorPricingRuleTags: dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTags = { ... }
```


### DataAwsccBillingconductorPricingRuleTiering <a name="DataAwsccBillingconductorPricingRuleTiering" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTiering"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTiering.Initializer"></a>

```typescript
import { dataAwsccBillingconductorPricingRule } from '@cdktn/provider-awscc'

const dataAwsccBillingconductorPricingRuleTiering: dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTiering = { ... }
```


### DataAwsccBillingconductorPricingRuleTieringFreeTier <a name="DataAwsccBillingconductorPricingRuleTieringFreeTier" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTier.Initializer"></a>

```typescript
import { dataAwsccBillingconductorPricingRule } from '@cdktn/provider-awscc'

const dataAwsccBillingconductorPricingRuleTieringFreeTier: dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTier = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBillingconductorPricingRuleTagsList <a name="DataAwsccBillingconductorPricingRuleTagsList" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.Initializer"></a>

```typescript
import { dataAwsccBillingconductorPricingRule } from '@cdktn/provider-awscc'

new dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.get"></a>

```typescript
public get(index: number): DataAwsccBillingconductorPricingRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBillingconductorPricingRuleTagsOutputReference <a name="DataAwsccBillingconductorPricingRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBillingconductorPricingRule } from '@cdktn/provider-awscc'

new dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTags">DataAwsccBillingconductorPricingRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBillingconductorPricingRuleTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTags">DataAwsccBillingconductorPricingRuleTags</a>

---


### DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference <a name="DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.Initializer"></a>

```typescript
import { dataAwsccBillingconductorPricingRule } from '@cdktn/provider-awscc'

new dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.property.activated">activated</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTier">DataAwsccBillingconductorPricingRuleTieringFreeTier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activated`<sup>Required</sup> <a name="activated" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.property.activated"></a>

```typescript
public readonly activated: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBillingconductorPricingRuleTieringFreeTier;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTier">DataAwsccBillingconductorPricingRuleTieringFreeTier</a>

---


### DataAwsccBillingconductorPricingRuleTieringOutputReference <a name="DataAwsccBillingconductorPricingRuleTieringOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.Initializer"></a>

```typescript
import { dataAwsccBillingconductorPricingRule } from '@cdktn/provider-awscc'

new dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.property.freeTier">freeTier</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference">DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTiering">DataAwsccBillingconductorPricingRuleTiering</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `freeTier`<sup>Required</sup> <a name="freeTier" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.property.freeTier"></a>

```typescript
public readonly freeTier: DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference">DataAwsccBillingconductorPricingRuleTieringFreeTierOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTieringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBillingconductorPricingRuleTiering;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorPricingRule.DataAwsccBillingconductorPricingRuleTiering">DataAwsccBillingconductorPricingRuleTiering</a>

---



