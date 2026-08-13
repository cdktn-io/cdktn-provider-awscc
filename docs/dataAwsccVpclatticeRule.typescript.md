# `dataAwsccVpclatticeRule` Submodule <a name="`dataAwsccVpclatticeRule` Submodule" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccVpclatticeRule <a name="DataAwsccVpclatticeRule" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/vpclattice_rule awscc_vpclattice_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeRule.DataAwsccVpclatticeRule(scope: Construct, id: string, config: DataAwsccVpclatticeRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig">DataAwsccVpclatticeRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig">DataAwsccVpclatticeRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccVpclatticeRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isConstruct"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isTerraformElement"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isTerraformDataSource"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.generateConfigForImport"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccVpclatticeRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccVpclatticeRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccVpclatticeRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/vpclattice_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccVpclatticeRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference">DataAwsccVpclatticeRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.listenerIdentifier">listenerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.match">match</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference">DataAwsccVpclatticeRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.serviceIdentifier">serviceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList">DataAwsccVpclatticeRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.action"></a>

```typescript
public readonly action: DataAwsccVpclatticeRuleActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference">DataAwsccVpclatticeRuleActionOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `listenerIdentifier`<sup>Required</sup> <a name="listenerIdentifier" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.listenerIdentifier"></a>

```typescript
public readonly listenerIdentifier: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.match"></a>

```typescript
public readonly match: DataAwsccVpclatticeRuleMatchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference">DataAwsccVpclatticeRuleMatchOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `serviceIdentifier`<sup>Required</sup> <a name="serviceIdentifier" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.serviceIdentifier"></a>

```typescript
public readonly serviceIdentifier: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.tags"></a>

```typescript
public readonly tags: DataAwsccVpclatticeRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList">DataAwsccVpclatticeRuleTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccVpclatticeRuleAction <a name="DataAwsccVpclatticeRuleAction" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleAction.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeRuleAction: dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleAction = { ... }
```


### DataAwsccVpclatticeRuleActionFixedResponse <a name="DataAwsccVpclatticeRuleActionFixedResponse" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponse.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeRuleActionFixedResponse: dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponse = { ... }
```


### DataAwsccVpclatticeRuleActionForward <a name="DataAwsccVpclatticeRuleActionForward" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForward.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeRuleActionForward: dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForward = { ... }
```


### DataAwsccVpclatticeRuleActionForwardTargetGroups <a name="DataAwsccVpclatticeRuleActionForwardTargetGroups" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroups.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeRuleActionForwardTargetGroups: dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroups = { ... }
```


### DataAwsccVpclatticeRuleConfig <a name="DataAwsccVpclatticeRuleConfig" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeRuleConfig: dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/vpclattice_rule#id DataAwsccVpclatticeRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccVpclatticeRuleMatch <a name="DataAwsccVpclatticeRuleMatch" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatch.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeRuleMatch: dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatch = { ... }
```


### DataAwsccVpclatticeRuleMatchHttpMatch <a name="DataAwsccVpclatticeRuleMatchHttpMatch" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatch.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeRuleMatchHttpMatch: dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatch = { ... }
```


### DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches <a name="DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches: dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches = { ... }
```


### DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch <a name="DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch: dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch = { ... }
```


### DataAwsccVpclatticeRuleMatchHttpMatchPathMatch <a name="DataAwsccVpclatticeRuleMatchHttpMatchPathMatch" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatch.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeRuleMatchHttpMatchPathMatch: dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatch = { ... }
```


### DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch <a name="DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch: dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch = { ... }
```


### DataAwsccVpclatticeRuleTags <a name="DataAwsccVpclatticeRuleTags" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTags.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeRuleTags: dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccVpclatticeRuleActionFixedResponseOutputReference <a name="DataAwsccVpclatticeRuleActionFixedResponseOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponse">DataAwsccVpclatticeRuleActionFixedResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccVpclatticeRuleActionFixedResponse;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponse">DataAwsccVpclatticeRuleActionFixedResponse</a>

---


### DataAwsccVpclatticeRuleActionForwardOutputReference <a name="DataAwsccVpclatticeRuleActionForwardOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.property.targetGroups">targetGroups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList">DataAwsccVpclatticeRuleActionForwardTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForward">DataAwsccVpclatticeRuleActionForward</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetGroups`<sup>Required</sup> <a name="targetGroups" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.property.targetGroups"></a>

```typescript
public readonly targetGroups: DataAwsccVpclatticeRuleActionForwardTargetGroupsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList">DataAwsccVpclatticeRuleActionForwardTargetGroupsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccVpclatticeRuleActionForward;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForward">DataAwsccVpclatticeRuleActionForward</a>

---


### DataAwsccVpclatticeRuleActionForwardTargetGroupsList <a name="DataAwsccVpclatticeRuleActionForwardTargetGroupsList" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.get"></a>

```typescript
public get(index: number): DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference <a name="DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier">targetGroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroups">DataAwsccVpclatticeRuleActionForwardTargetGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetGroupIdentifier`<sup>Required</sup> <a name="targetGroupIdentifier" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier"></a>

```typescript
public readonly targetGroupIdentifier: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccVpclatticeRuleActionForwardTargetGroups;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroups">DataAwsccVpclatticeRuleActionForwardTargetGroups</a>

---


### DataAwsccVpclatticeRuleActionOutputReference <a name="DataAwsccVpclatticeRuleActionOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference">DataAwsccVpclatticeRuleActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.forward">forward</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference">DataAwsccVpclatticeRuleActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleAction">DataAwsccVpclatticeRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedResponse`<sup>Required</sup> <a name="fixedResponse" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.fixedResponse"></a>

```typescript
public readonly fixedResponse: DataAwsccVpclatticeRuleActionFixedResponseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference">DataAwsccVpclatticeRuleActionFixedResponseOutputReference</a>

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.forward"></a>

```typescript
public readonly forward: DataAwsccVpclatticeRuleActionForwardOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference">DataAwsccVpclatticeRuleActionForwardOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccVpclatticeRuleAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleAction">DataAwsccVpclatticeRuleAction</a>

---


### DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList <a name="DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.get"></a>

```typescript
public get(index: number): DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference <a name="DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.contains">contains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exact">exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch">DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.contains"></a>

```typescript
public readonly contains: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch">DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch</a>

---


### DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference <a name="DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitive">caseSensitive</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.match">match</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference">DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches">DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caseSensitive`<sup>Required</sup> <a name="caseSensitive" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.match"></a>

```typescript
public readonly match: DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference">DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches">DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches</a>

---


### DataAwsccVpclatticeRuleMatchHttpMatchOutputReference <a name="DataAwsccVpclatticeRuleMatchHttpMatchOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.headerMatches">headerMatches</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList">DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.pathMatch">pathMatch</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference">DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatch">DataAwsccVpclatticeRuleMatchHttpMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerMatches`<sup>Required</sup> <a name="headerMatches" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.headerMatches"></a>

```typescript
public readonly headerMatches: DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList">DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList</a>

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `pathMatch`<sup>Required</sup> <a name="pathMatch" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.pathMatch"></a>

```typescript
public readonly pathMatch: DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference">DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccVpclatticeRuleMatchHttpMatch;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatch">DataAwsccVpclatticeRuleMatchHttpMatch</a>

---


### DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference <a name="DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.exact">exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch">DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch">DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch</a>

---


### DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference <a name="DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitive">caseSensitive</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.match">match</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference">DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatch">DataAwsccVpclatticeRuleMatchHttpMatchPathMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caseSensitive`<sup>Required</sup> <a name="caseSensitive" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.match"></a>

```typescript
public readonly match: DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference">DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccVpclatticeRuleMatchHttpMatchPathMatch;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatch">DataAwsccVpclatticeRuleMatchHttpMatchPathMatch</a>

---


### DataAwsccVpclatticeRuleMatchOutputReference <a name="DataAwsccVpclatticeRuleMatchOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.property.httpMatch">httpMatch</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference">DataAwsccVpclatticeRuleMatchHttpMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatch">DataAwsccVpclatticeRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpMatch`<sup>Required</sup> <a name="httpMatch" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.property.httpMatch"></a>

```typescript
public readonly httpMatch: DataAwsccVpclatticeRuleMatchHttpMatchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference">DataAwsccVpclatticeRuleMatchHttpMatchOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccVpclatticeRuleMatch;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatch">DataAwsccVpclatticeRuleMatch</a>

---


### DataAwsccVpclatticeRuleTagsList <a name="DataAwsccVpclatticeRuleTagsList" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.get"></a>

```typescript
public get(index: number): DataAwsccVpclatticeRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccVpclatticeRuleTagsOutputReference <a name="DataAwsccVpclatticeRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccVpclatticeRule } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTags">DataAwsccVpclatticeRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccVpclatticeRuleTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTags">DataAwsccVpclatticeRuleTags</a>

---



