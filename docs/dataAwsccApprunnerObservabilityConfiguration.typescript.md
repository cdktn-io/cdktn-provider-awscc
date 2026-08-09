# `dataAwsccApprunnerObservabilityConfiguration` Submodule <a name="`dataAwsccApprunnerObservabilityConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApprunnerObservabilityConfiguration <a name="DataAwsccApprunnerObservabilityConfiguration" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apprunner_observability_configuration awscc_apprunner_observability_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer"></a>

```typescript
import { dataAwsccApprunnerObservabilityConfiguration } from '@cdktn/provider-awscc'

new dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration(scope: Construct, id: string, config: DataAwsccApprunnerObservabilityConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig">DataAwsccApprunnerObservabilityConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig">DataAwsccApprunnerObservabilityConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApprunnerObservabilityConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isConstruct"></a>

```typescript
import { dataAwsccApprunnerObservabilityConfiguration } from '@cdktn/provider-awscc'

dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccApprunnerObservabilityConfiguration } from '@cdktn/provider-awscc'

dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccApprunnerObservabilityConfiguration } from '@cdktn/provider-awscc'

dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccApprunnerObservabilityConfiguration } from '@cdktn/provider-awscc'

dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccApprunnerObservabilityConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApprunnerObservabilityConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApprunnerObservabilityConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apprunner_observability_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApprunnerObservabilityConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.latest">latest</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.observabilityConfigurationArn">observabilityConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.observabilityConfigurationName">observabilityConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.observabilityConfigurationRevision">observabilityConfigurationRevision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList">DataAwsccApprunnerObservabilityConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.traceConfiguration">traceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference">DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `latest`<sup>Required</sup> <a name="latest" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.latest"></a>

```typescript
public readonly latest: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `observabilityConfigurationArn`<sup>Required</sup> <a name="observabilityConfigurationArn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.observabilityConfigurationArn"></a>

```typescript
public readonly observabilityConfigurationArn: string;
```

- *Type:* string

---

##### `observabilityConfigurationName`<sup>Required</sup> <a name="observabilityConfigurationName" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.observabilityConfigurationName"></a>

```typescript
public readonly observabilityConfigurationName: string;
```

- *Type:* string

---

##### `observabilityConfigurationRevision`<sup>Required</sup> <a name="observabilityConfigurationRevision" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.observabilityConfigurationRevision"></a>

```typescript
public readonly observabilityConfigurationRevision: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.tags"></a>

```typescript
public readonly tags: DataAwsccApprunnerObservabilityConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList">DataAwsccApprunnerObservabilityConfigurationTagsList</a>

---

##### `traceConfiguration`<sup>Required</sup> <a name="traceConfiguration" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.traceConfiguration"></a>

```typescript
public readonly traceConfiguration: DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference">DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApprunnerObservabilityConfigurationConfig <a name="DataAwsccApprunnerObservabilityConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccApprunnerObservabilityConfiguration } from '@cdktn/provider-awscc'

const dataAwsccApprunnerObservabilityConfigurationConfig: dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apprunner_observability_configuration#id DataAwsccApprunnerObservabilityConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApprunnerObservabilityConfigurationTags <a name="DataAwsccApprunnerObservabilityConfigurationTags" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTags.Initializer"></a>

```typescript
import { dataAwsccApprunnerObservabilityConfiguration } from '@cdktn/provider-awscc'

const dataAwsccApprunnerObservabilityConfigurationTags: dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTags = { ... }
```


### DataAwsccApprunnerObservabilityConfigurationTraceConfiguration <a name="DataAwsccApprunnerObservabilityConfigurationTraceConfiguration" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfiguration.Initializer"></a>

```typescript
import { dataAwsccApprunnerObservabilityConfiguration } from '@cdktn/provider-awscc'

const dataAwsccApprunnerObservabilityConfigurationTraceConfiguration: dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApprunnerObservabilityConfigurationTagsList <a name="DataAwsccApprunnerObservabilityConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer"></a>

```typescript
import { dataAwsccApprunnerObservabilityConfiguration } from '@cdktn/provider-awscc'

new dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccApprunnerObservabilityConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccApprunnerObservabilityConfigurationTagsOutputReference <a name="DataAwsccApprunnerObservabilityConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccApprunnerObservabilityConfiguration } from '@cdktn/provider-awscc'

new dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTags">DataAwsccApprunnerObservabilityConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApprunnerObservabilityConfigurationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTags">DataAwsccApprunnerObservabilityConfigurationTags</a>

---


### DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference <a name="DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccApprunnerObservabilityConfiguration } from '@cdktn/provider-awscc'

new dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendor">vendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfiguration">DataAwsccApprunnerObservabilityConfigurationTraceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApprunnerObservabilityConfigurationTraceConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfiguration">DataAwsccApprunnerObservabilityConfigurationTraceConfiguration</a>

---



