# `dataAwsccImagebuilderDistributionConfiguration` Submodule <a name="`dataAwsccImagebuilderDistributionConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccImagebuilderDistributionConfiguration <a name="DataAwsccImagebuilderDistributionConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/imagebuilder_distribution_configuration awscc_imagebuilder_distribution_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration(scope: Construct, id: string, config: DataAwsccImagebuilderDistributionConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig">DataAwsccImagebuilderDistributionConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig">DataAwsccImagebuilderDistributionConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccImagebuilderDistributionConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isConstruct"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccImagebuilderDistributionConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccImagebuilderDistributionConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccImagebuilderDistributionConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/imagebuilder_distribution_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccImagebuilderDistributionConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.distributions">distributions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList">DataAwsccImagebuilderDistributionConfigurationDistributionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `distributions`<sup>Required</sup> <a name="distributions" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.distributions"></a>

```typescript
public readonly distributions: DataAwsccImagebuilderDistributionConfigurationDistributionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList">DataAwsccImagebuilderDistributionConfigurationDistributionsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccImagebuilderDistributionConfigurationConfig <a name="DataAwsccImagebuilderDistributionConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderDistributionConfigurationConfig: dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/imagebuilder_distribution_configuration#id DataAwsccImagebuilderDistributionConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccImagebuilderDistributionConfigurationDistributions <a name="DataAwsccImagebuilderDistributionConfigurationDistributions" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributions.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderDistributionConfigurationDistributions: dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributions = { ... }
```


### DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration: dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration = { ... }
```


### DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration: dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration = { ... }
```


### DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration: dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration = { ... }
```


### DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository: dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository = { ... }
```


### DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations: dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations = { ... }
```


### DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate: dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate = { ... }
```


### DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration: dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration = { ... }
```


### DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations: dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations = { ... }
```


### DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations: dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationalUnitArns">organizationalUnitArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationArns">organizationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userGroups">userGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userIds">userIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration">DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `organizationalUnitArns`<sup>Required</sup> <a name="organizationalUnitArns" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationalUnitArns"></a>

```typescript
public readonly organizationalUnitArns: string[];
```

- *Type:* string[]

---

##### `organizationArns`<sup>Required</sup> <a name="organizationArns" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationArns"></a>

```typescript
public readonly organizationArns: string[];
```

- *Type:* string[]

---

##### `userGroups`<sup>Required</sup> <a name="userGroups" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userGroups"></a>

```typescript
public readonly userGroups: string[];
```

- *Type:* string[]

---

##### `userIds`<sup>Required</sup> <a name="userIds" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userIds"></a>

```typescript
public readonly userIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration">DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration</a>

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.amiTags">amiTags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.launchPermissionConfiguration">launchPermissionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.targetAccountIds">targetAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration">DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amiTags`<sup>Required</sup> <a name="amiTags" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.amiTags"></a>

```typescript
public readonly amiTags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `launchPermissionConfiguration`<sup>Required</sup> <a name="launchPermissionConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.launchPermissionConfiguration"></a>

```typescript
public readonly launchPermissionConfiguration: DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targetAccountIds`<sup>Required</sup> <a name="targetAccountIds" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.targetAccountIds"></a>

```typescript
public readonly targetAccountIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration">DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration</a>

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.containerTags">containerTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.targetRepository">targetRepository</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration">DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerTags`<sup>Required</sup> <a name="containerTags" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.containerTags"></a>

```typescript
public readonly containerTags: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `targetRepository`<sup>Required</sup> <a name="targetRepository" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.targetRepository"></a>

```typescript
public readonly targetRepository: DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration">DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration</a>

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository">DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository">DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository</a>

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateVersion">launchTemplateVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

---

##### `launchTemplateName`<sup>Required</sup> <a name="launchTemplateName" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

---

##### `launchTemplateVersion`<sup>Required</sup> <a name="launchTemplateVersion" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateVersion"></a>

```typescript
public readonly launchTemplateVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate</a>

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.maxParallelLaunches">maxParallelLaunches</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.snapshotConfiguration">snapshotConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference</a>

---

##### `maxParallelLaunches`<sup>Required</sup> <a name="maxParallelLaunches" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.maxParallelLaunches"></a>

```typescript
public readonly maxParallelLaunches: number;
```

- *Type:* number

---

##### `snapshotConfiguration`<sup>Required</sup> <a name="snapshotConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.snapshotConfiguration"></a>

```typescript
public readonly snapshotConfiguration: DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a>

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.targetResourceCount">targetResourceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetResourceCount`<sup>Required</sup> <a name="targetResourceCount" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.targetResourceCount"></a>

```typescript
public readonly targetResourceCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration</a>

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.setDefaultVersion">setDefaultVersion</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

---

##### `setDefaultVersion`<sup>Required</sup> <a name="setDefaultVersion" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.setDefaultVersion"></a>

```typescript
public readonly setDefaultVersion: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a>

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsList <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsList" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.get"></a>

```typescript
public get(index: number): DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.amiDistributionConfiguration">amiDistributionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.containerDistributionConfiguration">containerDistributionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.fastLaunchConfigurations">fastLaunchConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.launchTemplateConfigurations">launchTemplateConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList">DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.licenseConfigurationArns">licenseConfigurationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.ssmParameterConfigurations">ssmParameterConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList">DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributions">DataAwsccImagebuilderDistributionConfigurationDistributions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amiDistributionConfiguration`<sup>Required</sup> <a name="amiDistributionConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.amiDistributionConfiguration"></a>

```typescript
public readonly amiDistributionConfiguration: DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference</a>

---

##### `containerDistributionConfiguration`<sup>Required</sup> <a name="containerDistributionConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.containerDistributionConfiguration"></a>

```typescript
public readonly containerDistributionConfiguration: DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference</a>

---

##### `fastLaunchConfigurations`<sup>Required</sup> <a name="fastLaunchConfigurations" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.fastLaunchConfigurations"></a>

```typescript
public readonly fastLaunchConfigurations: DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList</a>

---

##### `launchTemplateConfigurations`<sup>Required</sup> <a name="launchTemplateConfigurations" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.launchTemplateConfigurations"></a>

```typescript
public readonly launchTemplateConfigurations: DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList">DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList</a>

---

##### `licenseConfigurationArns`<sup>Required</sup> <a name="licenseConfigurationArns" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.licenseConfigurationArns"></a>

```typescript
public readonly licenseConfigurationArns: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `ssmParameterConfigurations`<sup>Required</sup> <a name="ssmParameterConfigurations" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.ssmParameterConfigurations"></a>

```typescript
public readonly ssmParameterConfigurations: DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList">DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccImagebuilderDistributionConfigurationDistributions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributions">DataAwsccImagebuilderDistributionConfigurationDistributions</a>

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccImagebuilderDistributionConfiguration } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.amiAccountId">amiAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amiAccountId`<sup>Required</sup> <a name="amiAccountId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.amiAccountId"></a>

```typescript
public readonly amiAccountId: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a>

---



