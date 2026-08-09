# `dataAwsccAccessanalyzerAnalyzer` Submodule <a name="`dataAwsccAccessanalyzerAnalyzer` Submodule" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAccessanalyzerAnalyzer <a name="DataAwsccAccessanalyzerAnalyzer" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/accessanalyzer_analyzer awscc_accessanalyzer_analyzer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer(scope: Construct, id: string, config: DataAwsccAccessanalyzerAnalyzerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig">DataAwsccAccessanalyzerAnalyzerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig">DataAwsccAccessanalyzerAnalyzerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAccessanalyzerAnalyzer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.isConstruct"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.isTerraformElement"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.isTerraformDataSource"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.generateConfigForImport"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAccessanalyzerAnalyzer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAccessanalyzerAnalyzer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAccessanalyzerAnalyzer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/accessanalyzer_analyzer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAccessanalyzerAnalyzer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.analyzerConfiguration">analyzerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.analyzerName">analyzerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.archiveRules">archiveRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList">DataAwsccAccessanalyzerAnalyzerArchiveRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList">DataAwsccAccessanalyzerAnalyzerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `analyzerConfiguration`<sup>Required</sup> <a name="analyzerConfiguration" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.analyzerConfiguration"></a>

```typescript
public readonly analyzerConfiguration: DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference</a>

---

##### `analyzerName`<sup>Required</sup> <a name="analyzerName" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.analyzerName"></a>

```typescript
public readonly analyzerName: string;
```

- *Type:* string

---

##### `archiveRules`<sup>Required</sup> <a name="archiveRules" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.archiveRules"></a>

```typescript
public readonly archiveRules: DataAwsccAccessanalyzerAnalyzerArchiveRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList">DataAwsccAccessanalyzerAnalyzerArchiveRulesList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.tags"></a>

```typescript
public readonly tags: DataAwsccAccessanalyzerAnalyzerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList">DataAwsccAccessanalyzerAnalyzerTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAccessanalyzerAnalyzerAnalyzerConfiguration <a name="DataAwsccAccessanalyzerAnalyzerAnalyzerConfiguration" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfiguration.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const dataAwsccAccessanalyzerAnalyzerAnalyzerConfiguration: dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfiguration = { ... }
```


### DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration <a name="DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const dataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration: dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration = { ... }
```


### DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule <a name="DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const dataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule: dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule = { ... }
```


### DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions <a name="DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const dataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions: dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions = { ... }
```


### DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration <a name="DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const dataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration: dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration = { ... }
```


### DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule <a name="DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const dataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule: dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule = { ... }
```


### DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions <a name="DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const dataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions: dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions = { ... }
```


### DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags <a name="DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const dataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags: dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags = { ... }
```


### DataAwsccAccessanalyzerAnalyzerArchiveRules <a name="DataAwsccAccessanalyzerAnalyzerArchiveRules" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRules.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const dataAwsccAccessanalyzerAnalyzerArchiveRules: dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRules = { ... }
```


### DataAwsccAccessanalyzerAnalyzerArchiveRulesFilter <a name="DataAwsccAccessanalyzerAnalyzerArchiveRulesFilter" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilter.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const dataAwsccAccessanalyzerAnalyzerArchiveRulesFilter: dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilter = { ... }
```


### DataAwsccAccessanalyzerAnalyzerConfig <a name="DataAwsccAccessanalyzerAnalyzerConfig" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const dataAwsccAccessanalyzerAnalyzerConfig: dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/accessanalyzer_analyzer#id DataAwsccAccessanalyzerAnalyzer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAccessanalyzerAnalyzerTags <a name="DataAwsccAccessanalyzerAnalyzerTags" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTags.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

const dataAwsccAccessanalyzerAnalyzerTags: dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList <a name="DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.get"></a>

```typescript
public get(index: number): DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference <a name="DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.accountIds">accountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceArns">resourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

---

##### `resourceArns`<sup>Required</sup> <a name="resourceArns" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceArns"></a>

```typescript
public readonly resourceArns: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions</a>

---


### DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference <a name="DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.inclusions">inclusions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inclusions`<sup>Required</sup> <a name="inclusions" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.inclusions"></a>

```typescript
public readonly inclusions: DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule</a>

---


### DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference <a name="DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.internalAccessAnalysisRule">internalAccessAnalysisRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalAccessAnalysisRule`<sup>Required</sup> <a name="internalAccessAnalysisRule" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.internalAccessAnalysisRule"></a>

```typescript
public readonly internalAccessAnalysisRule: DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration</a>

---


### DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference <a name="DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.internalAccessConfiguration">internalAccessConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.unusedAccessConfiguration">unusedAccessConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfiguration">DataAwsccAccessanalyzerAnalyzerAnalyzerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalAccessConfiguration`<sup>Required</sup> <a name="internalAccessConfiguration" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.internalAccessConfiguration"></a>

```typescript
public readonly internalAccessConfiguration: DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference</a>

---

##### `unusedAccessConfiguration`<sup>Required</sup> <a name="unusedAccessConfiguration" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.unusedAccessConfiguration"></a>

```typescript
public readonly unusedAccessConfiguration: DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAccessanalyzerAnalyzerAnalyzerConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfiguration">DataAwsccAccessanalyzerAnalyzerAnalyzerConfiguration</a>

---


### DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList <a name="DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.get"></a>

```typescript
public get(index: number): DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference <a name="DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.accountIds">accountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.resourceTags">resourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.resourceTags"></a>

```typescript
public readonly resourceTags: DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions</a>

---


### DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList <a name="DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference <a name="DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags</a>

---


### DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference <a name="DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.exclusions">exclusions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.exclusions"></a>

```typescript
public readonly exclusions: DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule</a>

---


### DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference <a name="DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.analysisRule">analysisRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.unusedAccessAge">unusedAccessAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analysisRule`<sup>Required</sup> <a name="analysisRule" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.analysisRule"></a>

```typescript
public readonly analysisRule: DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference</a>

---

##### `unusedAccessAge`<sup>Required</sup> <a name="unusedAccessAge" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.unusedAccessAge"></a>

```typescript
public readonly unusedAccessAge: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration">DataAwsccAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration</a>

---


### DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList <a name="DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.get"></a>

```typescript
public get(index: number): DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference <a name="DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.contains">contains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.eq">eq</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.exists">exists</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.neq">neq</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.property">property</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilter">DataAwsccAccessanalyzerAnalyzerArchiveRulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.contains"></a>

```typescript
public readonly contains: string[];
```

- *Type:* string[]

---

##### `eq`<sup>Required</sup> <a name="eq" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.eq"></a>

```typescript
public readonly eq: string[];
```

- *Type:* string[]

---

##### `exists`<sup>Required</sup> <a name="exists" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.exists"></a>

```typescript
public readonly exists: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `neq`<sup>Required</sup> <a name="neq" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.neq"></a>

```typescript
public readonly neq: string[];
```

- *Type:* string[]

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.property"></a>

```typescript
public readonly property: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAccessanalyzerAnalyzerArchiveRulesFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilter">DataAwsccAccessanalyzerAnalyzerArchiveRulesFilter</a>

---


### DataAwsccAccessanalyzerAnalyzerArchiveRulesList <a name="DataAwsccAccessanalyzerAnalyzerArchiveRulesList" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.get"></a>

```typescript
public get(index: number): DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference <a name="DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList">DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRules">DataAwsccAccessanalyzerAnalyzerArchiveRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.property.filter"></a>

```typescript
public readonly filter: DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList">DataAwsccAccessanalyzerAnalyzerArchiveRulesFilterList</a>

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAccessanalyzerAnalyzerArchiveRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerArchiveRules">DataAwsccAccessanalyzerAnalyzerArchiveRules</a>

---


### DataAwsccAccessanalyzerAnalyzerTagsList <a name="DataAwsccAccessanalyzerAnalyzerTagsList" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.get"></a>

```typescript
public get(index: number): DataAwsccAccessanalyzerAnalyzerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAccessanalyzerAnalyzerTagsOutputReference <a name="DataAwsccAccessanalyzerAnalyzerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAccessanalyzerAnalyzer } from '@cdktn/provider-awscc'

new dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTags">DataAwsccAccessanalyzerAnalyzerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAccessanalyzerAnalyzerTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerAnalyzer.DataAwsccAccessanalyzerAnalyzerTags">DataAwsccAccessanalyzerAnalyzerTags</a>

---



