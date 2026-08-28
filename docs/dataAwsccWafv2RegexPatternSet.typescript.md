# `dataAwsccWafv2RegexPatternSet` Submodule <a name="`dataAwsccWafv2RegexPatternSet` Submodule" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWafv2RegexPatternSet <a name="DataAwsccWafv2RegexPatternSet" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/wafv2_regex_pattern_set awscc_wafv2_regex_pattern_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.Initializer"></a>

```typescript
import { dataAwsccWafv2RegexPatternSet } from '@cdktn/provider-awscc'

new dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet(scope: Construct, id: string, config: DataAwsccWafv2RegexPatternSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig">DataAwsccWafv2RegexPatternSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig">DataAwsccWafv2RegexPatternSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWafv2RegexPatternSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.isConstruct"></a>

```typescript
import { dataAwsccWafv2RegexPatternSet } from '@cdktn/provider-awscc'

dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.isTerraformElement"></a>

```typescript
import { dataAwsccWafv2RegexPatternSet } from '@cdktn/provider-awscc'

dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.isTerraformDataSource"></a>

```typescript
import { dataAwsccWafv2RegexPatternSet } from '@cdktn/provider-awscc'

dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.generateConfigForImport"></a>

```typescript
import { dataAwsccWafv2RegexPatternSet } from '@cdktn/provider-awscc'

dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccWafv2RegexPatternSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccWafv2RegexPatternSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccWafv2RegexPatternSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/wafv2_regex_pattern_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWafv2RegexPatternSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.regexPatternSetId">regexPatternSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.regularExpressionList">regularExpressionList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList">DataAwsccWafv2RegexPatternSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regexPatternSetId`<sup>Required</sup> <a name="regexPatternSetId" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.regexPatternSetId"></a>

```typescript
public readonly regexPatternSetId: string;
```

- *Type:* string

---

##### `regularExpressionList`<sup>Required</sup> <a name="regularExpressionList" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.regularExpressionList"></a>

```typescript
public readonly regularExpressionList: string[];
```

- *Type:* string[]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.tags"></a>

```typescript
public readonly tags: DataAwsccWafv2RegexPatternSetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList">DataAwsccWafv2RegexPatternSetTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWafv2RegexPatternSetConfig <a name="DataAwsccWafv2RegexPatternSetConfig" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig.Initializer"></a>

```typescript
import { dataAwsccWafv2RegexPatternSet } from '@cdktn/provider-awscc'

const dataAwsccWafv2RegexPatternSetConfig: dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/wafv2_regex_pattern_set#id DataAwsccWafv2RegexPatternSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWafv2RegexPatternSetTags <a name="DataAwsccWafv2RegexPatternSetTags" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTags.Initializer"></a>

```typescript
import { dataAwsccWafv2RegexPatternSet } from '@cdktn/provider-awscc'

const dataAwsccWafv2RegexPatternSetTags: dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWafv2RegexPatternSetTagsList <a name="DataAwsccWafv2RegexPatternSetTagsList" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.Initializer"></a>

```typescript
import { dataAwsccWafv2RegexPatternSet } from '@cdktn/provider-awscc'

new dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.get"></a>

```typescript
public get(index: number): DataAwsccWafv2RegexPatternSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWafv2RegexPatternSetTagsOutputReference <a name="DataAwsccWafv2RegexPatternSetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccWafv2RegexPatternSet } from '@cdktn/provider-awscc'

new dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTags">DataAwsccWafv2RegexPatternSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWafv2RegexPatternSetTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2RegexPatternSet.DataAwsccWafv2RegexPatternSetTags">DataAwsccWafv2RegexPatternSetTags</a>

---



