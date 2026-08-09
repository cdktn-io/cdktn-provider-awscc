# `dataAwsccApprunnerAutoScalingConfiguration` Submodule <a name="`dataAwsccApprunnerAutoScalingConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApprunnerAutoScalingConfiguration <a name="DataAwsccApprunnerAutoScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apprunner_auto_scaling_configuration awscc_apprunner_auto_scaling_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.Initializer"></a>

```typescript
import { dataAwsccApprunnerAutoScalingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration(scope: Construct, id: string, config: DataAwsccApprunnerAutoScalingConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig">DataAwsccApprunnerAutoScalingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig">DataAwsccApprunnerAutoScalingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApprunnerAutoScalingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isConstruct"></a>

```typescript
import { dataAwsccApprunnerAutoScalingConfiguration } from '@cdktn/provider-awscc'

dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccApprunnerAutoScalingConfiguration } from '@cdktn/provider-awscc'

dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccApprunnerAutoScalingConfiguration } from '@cdktn/provider-awscc'

dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccApprunnerAutoScalingConfiguration } from '@cdktn/provider-awscc'

dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccApprunnerAutoScalingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApprunnerAutoScalingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApprunnerAutoScalingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apprunner_auto_scaling_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApprunnerAutoScalingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.autoScalingConfigurationArn">autoScalingConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.autoScalingConfigurationName">autoScalingConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.autoScalingConfigurationRevision">autoScalingConfigurationRevision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.latest">latest</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.maxConcurrency">maxConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList">DataAwsccApprunnerAutoScalingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `autoScalingConfigurationArn`<sup>Required</sup> <a name="autoScalingConfigurationArn" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.autoScalingConfigurationArn"></a>

```typescript
public readonly autoScalingConfigurationArn: string;
```

- *Type:* string

---

##### `autoScalingConfigurationName`<sup>Required</sup> <a name="autoScalingConfigurationName" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.autoScalingConfigurationName"></a>

```typescript
public readonly autoScalingConfigurationName: string;
```

- *Type:* string

---

##### `autoScalingConfigurationRevision`<sup>Required</sup> <a name="autoScalingConfigurationRevision" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.autoScalingConfigurationRevision"></a>

```typescript
public readonly autoScalingConfigurationRevision: number;
```

- *Type:* number

---

##### `latest`<sup>Required</sup> <a name="latest" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.latest"></a>

```typescript
public readonly latest: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: number;
```

- *Type:* number

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.tags"></a>

```typescript
public readonly tags: DataAwsccApprunnerAutoScalingConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList">DataAwsccApprunnerAutoScalingConfigurationTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApprunnerAutoScalingConfigurationConfig <a name="DataAwsccApprunnerAutoScalingConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccApprunnerAutoScalingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccApprunnerAutoScalingConfigurationConfig: dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apprunner_auto_scaling_configuration#id DataAwsccApprunnerAutoScalingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApprunnerAutoScalingConfigurationTags <a name="DataAwsccApprunnerAutoScalingConfigurationTags" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTags.Initializer"></a>

```typescript
import { dataAwsccApprunnerAutoScalingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccApprunnerAutoScalingConfigurationTags: dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApprunnerAutoScalingConfigurationTagsList <a name="DataAwsccApprunnerAutoScalingConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.Initializer"></a>

```typescript
import { dataAwsccApprunnerAutoScalingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference <a name="DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccApprunnerAutoScalingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTags">DataAwsccApprunnerAutoScalingConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApprunnerAutoScalingConfigurationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTags">DataAwsccApprunnerAutoScalingConfigurationTags</a>

---



