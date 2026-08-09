# `dataAwsccCodeguruprofilerProfilingGroup` Submodule <a name="`dataAwsccCodeguruprofilerProfilingGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodeguruprofilerProfilingGroup <a name="DataAwsccCodeguruprofilerProfilingGroup" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/codeguruprofiler_profiling_group awscc_codeguruprofiler_profiling_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer"></a>

```typescript
import { dataAwsccCodeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

new dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup(scope: Construct, id: string, config: DataAwsccCodeguruprofilerProfilingGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig">DataAwsccCodeguruprofilerProfilingGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig">DataAwsccCodeguruprofilerProfilingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCodeguruprofilerProfilingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isConstruct"></a>

```typescript
import { dataAwsccCodeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isTerraformElement"></a>

```typescript
import { dataAwsccCodeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsccCodeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.generateConfigForImport"></a>

```typescript
import { dataAwsccCodeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCodeguruprofilerProfilingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCodeguruprofilerProfilingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCodeguruprofilerProfilingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/codeguruprofiler_profiling_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodeguruprofilerProfilingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.agentPermissions">agentPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference">DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfiguration">anomalyDetectionNotificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList">DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.computePlatform">computePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.profilingGroupName">profilingGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList">DataAwsccCodeguruprofilerProfilingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `agentPermissions`<sup>Required</sup> <a name="agentPermissions" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.agentPermissions"></a>

```typescript
public readonly agentPermissions: DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference">DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference</a>

---

##### `anomalyDetectionNotificationConfiguration`<sup>Required</sup> <a name="anomalyDetectionNotificationConfiguration" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfiguration"></a>

```typescript
public readonly anomalyDetectionNotificationConfiguration: DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList">DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `computePlatform`<sup>Required</sup> <a name="computePlatform" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.computePlatform"></a>

```typescript
public readonly computePlatform: string;
```

- *Type:* string

---

##### `profilingGroupName`<sup>Required</sup> <a name="profilingGroupName" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.profilingGroupName"></a>

```typescript
public readonly profilingGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.tags"></a>

```typescript
public readonly tags: DataAwsccCodeguruprofilerProfilingGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList">DataAwsccCodeguruprofilerProfilingGroupTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodeguruprofilerProfilingGroupAgentPermissions <a name="DataAwsccCodeguruprofilerProfilingGroupAgentPermissions" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissions.Initializer"></a>

```typescript
import { dataAwsccCodeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

const dataAwsccCodeguruprofilerProfilingGroupAgentPermissions: dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissions = { ... }
```


### DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration <a name="DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.Initializer"></a>

```typescript
import { dataAwsccCodeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

const dataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration: dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration = { ... }
```


### DataAwsccCodeguruprofilerProfilingGroupConfig <a name="DataAwsccCodeguruprofilerProfilingGroupConfig" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.Initializer"></a>

```typescript
import { dataAwsccCodeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

const dataAwsccCodeguruprofilerProfilingGroupConfig: dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/codeguruprofiler_profiling_group#id DataAwsccCodeguruprofilerProfilingGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodeguruprofilerProfilingGroupTags <a name="DataAwsccCodeguruprofilerProfilingGroupTags" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTags.Initializer"></a>

```typescript
import { dataAwsccCodeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

const dataAwsccCodeguruprofilerProfilingGroupTags: dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference <a name="DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

new dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principals">principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissions">DataAwsccCodeguruprofilerProfilingGroupAgentPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodeguruprofilerProfilingGroupAgentPermissions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAgentPermissions">DataAwsccCodeguruprofilerProfilingGroupAgentPermissions</a>

---


### DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList <a name="DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer"></a>

```typescript
import { dataAwsccCodeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

new dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference <a name="DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

new dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUri">channelUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `channelUri`<sup>Required</sup> <a name="channelUri" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUri"></a>

```typescript
public readonly channelUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>

---


### DataAwsccCodeguruprofilerProfilingGroupTagsList <a name="DataAwsccCodeguruprofilerProfilingGroupTagsList" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.Initializer"></a>

```typescript
import { dataAwsccCodeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

new dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.get"></a>

```typescript
public get(index: number): DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference <a name="DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodeguruprofilerProfilingGroup } from '@cdktn/provider-awscc'

new dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTags">DataAwsccCodeguruprofilerProfilingGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodeguruprofilerProfilingGroupTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeguruprofilerProfilingGroup.DataAwsccCodeguruprofilerProfilingGroupTags">DataAwsccCodeguruprofilerProfilingGroupTags</a>

---



