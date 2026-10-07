# `dataAwsccApplicationsignalsInstrumentationConfig` Submodule <a name="`dataAwsccApplicationsignalsInstrumentationConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApplicationsignalsInstrumentationConfig <a name="DataAwsccApplicationsignalsInstrumentationConfig" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/applicationsignals_instrumentation_config awscc_applicationsignals_instrumentation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

new dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig(scope: Construct, id: string, config: DataAwsccApplicationsignalsInstrumentationConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig">DataAwsccApplicationsignalsInstrumentationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig">DataAwsccApplicationsignalsInstrumentationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isConstruct"></a>

```typescript
import { dataAwsccApplicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformElement"></a>

```typescript
import { dataAwsccApplicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformDataSource"></a>

```typescript
import { dataAwsccApplicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport"></a>

```typescript
import { dataAwsccApplicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApplicationsignalsInstrumentationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApplicationsignalsInstrumentationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/applicationsignals_instrumentation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApplicationsignalsInstrumentationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.attributeFilters">attributeFilters</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.captureConfiguration">captureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.instrumentationType">instrumentationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.locationHash">locationHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.signalType">signalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList">DataAwsccApplicationsignalsInstrumentationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `attributeFilters`<sup>Required</sup> <a name="attributeFilters" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.attributeFilters"></a>

```typescript
public readonly attributeFilters: StringMapList;
```

- *Type:* cdktn.StringMapList

---

##### `captureConfiguration`<sup>Required</sup> <a name="captureConfiguration" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.captureConfiguration"></a>

```typescript
public readonly captureConfiguration: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `instrumentationType`<sup>Required</sup> <a name="instrumentationType" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.instrumentationType"></a>

```typescript
public readonly instrumentationType: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.location"></a>

```typescript
public readonly location: DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference</a>

---

##### `locationHash`<sup>Required</sup> <a name="locationHash" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.locationHash"></a>

```typescript
public readonly locationHash: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `signalType`<sup>Required</sup> <a name="signalType" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.signalType"></a>

```typescript
public readonly signalType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.tags"></a>

```typescript
public readonly tags: DataAwsccApplicationsignalsInstrumentationConfigTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList">DataAwsccApplicationsignalsInstrumentationConfigTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

const dataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration: dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration = { ... }
```


### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

const dataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture: dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture = { ... }
```


### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

const dataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits: dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits = { ... }
```


### DataAwsccApplicationsignalsInstrumentationConfigConfig <a name="DataAwsccApplicationsignalsInstrumentationConfigConfig" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

const dataAwsccApplicationsignalsInstrumentationConfigConfig: dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/applicationsignals_instrumentation_config#id DataAwsccApplicationsignalsInstrumentationConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApplicationsignalsInstrumentationConfigLocation <a name="DataAwsccApplicationsignalsInstrumentationConfigLocation" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocation.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

const dataAwsccApplicationsignalsInstrumentationConfigLocation: dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocation = { ... }
```


### DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation <a name="DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

const dataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation: dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation = { ... }
```


### DataAwsccApplicationsignalsInstrumentationConfigTags <a name="DataAwsccApplicationsignalsInstrumentationConfigTags" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTags.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

const dataAwsccApplicationsignalsInstrumentationConfigTags: dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

new dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepth">maxCollectionDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidth">maxCollectionWidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObject">maxFieldsPerObject</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHits">maxHits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepth">maxObjectDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFrames">maxStackFrames</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSize">maxStackTraceSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLength">maxStringLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxCollectionDepth`<sup>Required</sup> <a name="maxCollectionDepth" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepth"></a>

```typescript
public readonly maxCollectionDepth: number;
```

- *Type:* number

---

##### `maxCollectionWidth`<sup>Required</sup> <a name="maxCollectionWidth" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidth"></a>

```typescript
public readonly maxCollectionWidth: number;
```

- *Type:* number

---

##### `maxFieldsPerObject`<sup>Required</sup> <a name="maxFieldsPerObject" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObject"></a>

```typescript
public readonly maxFieldsPerObject: number;
```

- *Type:* number

---

##### `maxHits`<sup>Required</sup> <a name="maxHits" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHits"></a>

```typescript
public readonly maxHits: number;
```

- *Type:* number

---

##### `maxObjectDepth`<sup>Required</sup> <a name="maxObjectDepth" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepth"></a>

```typescript
public readonly maxObjectDepth: number;
```

- *Type:* number

---

##### `maxStackFrames`<sup>Required</sup> <a name="maxStackFrames" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFrames"></a>

```typescript
public readonly maxStackFrames: number;
```

- *Type:* number

---

##### `maxStackTraceSize`<sup>Required</sup> <a name="maxStackTraceSize" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSize"></a>

```typescript
public readonly maxStackTraceSize: number;
```

- *Type:* number

---

##### `maxStringLength`<sup>Required</sup> <a name="maxStringLength" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLength"></a>

```typescript
public readonly maxStringLength: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

new dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArguments">captureArguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimits">captureLimits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocals">captureLocals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturn">captureReturn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTrace">captureStackTrace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `captureArguments`<sup>Required</sup> <a name="captureArguments" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArguments"></a>

```typescript
public readonly captureArguments: string[];
```

- *Type:* string[]

---

##### `captureLimits`<sup>Required</sup> <a name="captureLimits" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimits"></a>

```typescript
public readonly captureLimits: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference</a>

---

##### `captureLocals`<sup>Required</sup> <a name="captureLocals" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocals"></a>

```typescript
public readonly captureLocals: string[];
```

- *Type:* string[]

---

##### `captureReturn`<sup>Required</sup> <a name="captureReturn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturn"></a>

```typescript
public readonly captureReturn: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `captureStackTrace`<sup>Required</sup> <a name="captureStackTrace" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTrace"></a>

```typescript
public readonly captureStackTrace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

new dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCapture">codeCapture</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeCapture`<sup>Required</sup> <a name="codeCapture" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCapture"></a>

```typescript
public readonly codeCapture: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

new dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.className">className</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnit">codeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumber">lineNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodName">methodName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation">DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `className`<sup>Required</sup> <a name="className" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.className"></a>

```typescript
public readonly className: string;
```

- *Type:* string

---

##### `codeUnit`<sup>Required</sup> <a name="codeUnit" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnit"></a>

```typescript
public readonly codeUnit: string;
```

- *Type:* string

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `lineNumber`<sup>Required</sup> <a name="lineNumber" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumber"></a>

```typescript
public readonly lineNumber: number;
```

- *Type:* number

---

##### `methodName`<sup>Required</sup> <a name="methodName" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodName"></a>

```typescript
public readonly methodName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation">DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

new dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocation">codeLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocation">DataAwsccApplicationsignalsInstrumentationConfigLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeLocation`<sup>Required</sup> <a name="codeLocation" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocation"></a>

```typescript
public readonly codeLocation: DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApplicationsignalsInstrumentationConfigLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocation">DataAwsccApplicationsignalsInstrumentationConfigLocation</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigTagsList <a name="DataAwsccApplicationsignalsInstrumentationConfigTagsList" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

new dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.get"></a>

```typescript
public get(index: number): DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

new dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTags">DataAwsccApplicationsignalsInstrumentationConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApplicationsignalsInstrumentationConfigTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTags">DataAwsccApplicationsignalsInstrumentationConfigTags</a>

---



