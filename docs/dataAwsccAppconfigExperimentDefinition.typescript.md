# `dataAwsccAppconfigExperimentDefinition` Submodule <a name="`dataAwsccAppconfigExperimentDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppconfigExperimentDefinition <a name="DataAwsccAppconfigExperimentDefinition" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/appconfig_experiment_definition awscc_appconfig_experiment_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

new dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition(scope: Construct, id: string, config: DataAwsccAppconfigExperimentDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig">DataAwsccAppconfigExperimentDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig">DataAwsccAppconfigExperimentDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppconfigExperimentDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isConstruct"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformElement"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformDataSource"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generateConfigForImport"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAppconfigExperimentDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAppconfigExperimentDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAppconfigExperimentDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/appconfig_experiment_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppconfigExperimentDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.applicationIdentifier">applicationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.audienceDescription">audienceDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.audienceRule">audienceRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.configurationProfileIdentifier">configurationProfileIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.control">control</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference">DataAwsccAppconfigExperimentDefinitionControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.environmentIdentifier">environmentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.experimentDefinitionId">experimentDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.flagKey">flagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.hypothesis">hypothesis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.launchCriteria">launchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList">DataAwsccAppconfigExperimentDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.treatments">treatments</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList">DataAwsccAppconfigExperimentDefinitionTreatmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `applicationIdentifier`<sup>Required</sup> <a name="applicationIdentifier" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.applicationIdentifier"></a>

```typescript
public readonly applicationIdentifier: string;
```

- *Type:* string

---

##### `audienceDescription`<sup>Required</sup> <a name="audienceDescription" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.audienceDescription"></a>

```typescript
public readonly audienceDescription: string;
```

- *Type:* string

---

##### `audienceRule`<sup>Required</sup> <a name="audienceRule" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.audienceRule"></a>

```typescript
public readonly audienceRule: string;
```

- *Type:* string

---

##### `configurationProfileIdentifier`<sup>Required</sup> <a name="configurationProfileIdentifier" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.configurationProfileIdentifier"></a>

```typescript
public readonly configurationProfileIdentifier: string;
```

- *Type:* string

---

##### `control`<sup>Required</sup> <a name="control" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.control"></a>

```typescript
public readonly control: DataAwsccAppconfigExperimentDefinitionControlOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference">DataAwsccAppconfigExperimentDefinitionControlOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.environmentIdentifier"></a>

```typescript
public readonly environmentIdentifier: string;
```

- *Type:* string

---

##### `experimentDefinitionId`<sup>Required</sup> <a name="experimentDefinitionId" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.experimentDefinitionId"></a>

```typescript
public readonly experimentDefinitionId: string;
```

- *Type:* string

---

##### `flagKey`<sup>Required</sup> <a name="flagKey" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.flagKey"></a>

```typescript
public readonly flagKey: string;
```

- *Type:* string

---

##### `hypothesis`<sup>Required</sup> <a name="hypothesis" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.hypothesis"></a>

```typescript
public readonly hypothesis: string;
```

- *Type:* string

---

##### `launchCriteria`<sup>Required</sup> <a name="launchCriteria" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.launchCriteria"></a>

```typescript
public readonly launchCriteria: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.tags"></a>

```typescript
public readonly tags: DataAwsccAppconfigExperimentDefinitionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList">DataAwsccAppconfigExperimentDefinitionTagsList</a>

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.treatments"></a>

```typescript
public readonly treatments: DataAwsccAppconfigExperimentDefinitionTreatmentsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList">DataAwsccAppconfigExperimentDefinitionTreatmentsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppconfigExperimentDefinitionConfig <a name="DataAwsccAppconfigExperimentDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.Initializer"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

const dataAwsccAppconfigExperimentDefinitionConfig: dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/appconfig_experiment_definition#id DataAwsccAppconfigExperimentDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppconfigExperimentDefinitionControl <a name="DataAwsccAppconfigExperimentDefinitionControl" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControl.Initializer"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

const dataAwsccAppconfigExperimentDefinitionControl: dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControl = { ... }
```


### DataAwsccAppconfigExperimentDefinitionControlAttributeValues <a name="DataAwsccAppconfigExperimentDefinitionControlAttributeValues" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValues.Initializer"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

const dataAwsccAppconfigExperimentDefinitionControlAttributeValues: dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValues = { ... }
```


### DataAwsccAppconfigExperimentDefinitionTags <a name="DataAwsccAppconfigExperimentDefinitionTags" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTags.Initializer"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

const dataAwsccAppconfigExperimentDefinitionTags: dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTags = { ... }
```


### DataAwsccAppconfigExperimentDefinitionTreatments <a name="DataAwsccAppconfigExperimentDefinitionTreatments" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatments.Initializer"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

const dataAwsccAppconfigExperimentDefinitionTreatments: dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatments = { ... }
```


### DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues <a name="DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues.Initializer"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

const dataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues: dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap <a name="DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.Initializer"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

new dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.get"></a>

```typescript
public get(key: string): DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference <a name="DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

new dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValue">booleanValue</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArray">numberArray</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValue">numberValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArray">stringArray</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValues">DataAwsccAppconfigExperimentDefinitionControlAttributeValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValue"></a>

```typescript
public readonly booleanValue: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `numberArray`<sup>Required</sup> <a name="numberArray" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArray"></a>

```typescript
public readonly numberArray: number[];
```

- *Type:* number[]

---

##### `numberValue`<sup>Required</sup> <a name="numberValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValue"></a>

```typescript
public readonly numberValue: number;
```

- *Type:* number

---

##### `stringArray`<sup>Required</sup> <a name="stringArray" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArray"></a>

```typescript
public readonly stringArray: string[];
```

- *Type:* string[]

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppconfigExperimentDefinitionControlAttributeValues;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValues">DataAwsccAppconfigExperimentDefinitionControlAttributeValues</a>

---


### DataAwsccAppconfigExperimentDefinitionControlOutputReference <a name="DataAwsccAppconfigExperimentDefinitionControlOutputReference" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

new dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.attributeValues">attributeValues</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap">DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControl">DataAwsccAppconfigExperimentDefinitionControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeValues`<sup>Required</sup> <a name="attributeValues" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.attributeValues"></a>

```typescript
public readonly attributeValues: DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap">DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppconfigExperimentDefinitionControl;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControl">DataAwsccAppconfigExperimentDefinitionControl</a>

---


### DataAwsccAppconfigExperimentDefinitionTagsList <a name="DataAwsccAppconfigExperimentDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

new dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccAppconfigExperimentDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAppconfigExperimentDefinitionTagsOutputReference <a name="DataAwsccAppconfigExperimentDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

new dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTags">DataAwsccAppconfigExperimentDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppconfigExperimentDefinitionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTags">DataAwsccAppconfigExperimentDefinitionTags</a>

---


### DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap <a name="DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

new dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get"></a>

```typescript
public get(key: string): DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference <a name="DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

new dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValue">booleanValue</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArray">numberArray</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValue">numberValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArray">stringArray</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues">DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValue"></a>

```typescript
public readonly booleanValue: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `numberArray`<sup>Required</sup> <a name="numberArray" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArray"></a>

```typescript
public readonly numberArray: number[];
```

- *Type:* number[]

---

##### `numberValue`<sup>Required</sup> <a name="numberValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValue"></a>

```typescript
public readonly numberValue: number;
```

- *Type:* number

---

##### `stringArray`<sup>Required</sup> <a name="stringArray" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArray"></a>

```typescript
public readonly stringArray: string[];
```

- *Type:* string[]

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues">DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues</a>

---


### DataAwsccAppconfigExperimentDefinitionTreatmentsList <a name="DataAwsccAppconfigExperimentDefinitionTreatmentsList" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

new dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.get"></a>

```typescript
public get(index: number): DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference <a name="DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppconfigExperimentDefinition } from '@cdktn/provider-awscc'

new dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValues">attributeValues</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap">DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatments">DataAwsccAppconfigExperimentDefinitionTreatments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeValues`<sup>Required</sup> <a name="attributeValues" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValues"></a>

```typescript
public readonly attributeValues: DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap">DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppconfigExperimentDefinitionTreatments;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatments">DataAwsccAppconfigExperimentDefinitionTreatments</a>

---



