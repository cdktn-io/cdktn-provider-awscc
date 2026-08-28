# `dataAwsccApplicationsignalsGroupingConfiguration` Submodule <a name="`dataAwsccApplicationsignalsGroupingConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApplicationsignalsGroupingConfiguration <a name="DataAwsccApplicationsignalsGroupingConfiguration" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/applicationsignals_grouping_configuration awscc_applicationsignals_grouping_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsGroupingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration(scope: Construct, id: string, config: DataAwsccApplicationsignalsGroupingConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig">DataAwsccApplicationsignalsGroupingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig">DataAwsccApplicationsignalsGroupingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApplicationsignalsGroupingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.isConstruct"></a>

```typescript
import { dataAwsccApplicationsignalsGroupingConfiguration } from '@cdktn/provider-awscc'

dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccApplicationsignalsGroupingConfiguration } from '@cdktn/provider-awscc'

dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccApplicationsignalsGroupingConfiguration } from '@cdktn/provider-awscc'

dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccApplicationsignalsGroupingConfiguration } from '@cdktn/provider-awscc'

dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccApplicationsignalsGroupingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApplicationsignalsGroupingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApplicationsignalsGroupingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/applicationsignals_grouping_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApplicationsignalsGroupingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.groupingAttributeDefinitions">groupingAttributeDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList">DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `groupingAttributeDefinitions`<sup>Required</sup> <a name="groupingAttributeDefinitions" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.groupingAttributeDefinitions"></a>

```typescript
public readonly groupingAttributeDefinitions: DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList">DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApplicationsignalsGroupingConfigurationConfig <a name="DataAwsccApplicationsignalsGroupingConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsGroupingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccApplicationsignalsGroupingConfigurationConfig: dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/applicationsignals_grouping_configuration#id DataAwsccApplicationsignalsGroupingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions <a name="DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsGroupingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions: dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList <a name="DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsGroupingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.get"></a>

```typescript
public get(index: number): DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference <a name="DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccApplicationsignalsGroupingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.defaultGroupingValue">defaultGroupingValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingName">groupingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingSourceKeys">groupingSourceKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultGroupingValue`<sup>Required</sup> <a name="defaultGroupingValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.defaultGroupingValue"></a>

```typescript
public readonly defaultGroupingValue: string;
```

- *Type:* string

---

##### `groupingName`<sup>Required</sup> <a name="groupingName" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingName"></a>

```typescript
public readonly groupingName: string;
```

- *Type:* string

---

##### `groupingSourceKeys`<sup>Required</sup> <a name="groupingSourceKeys" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingSourceKeys"></a>

```typescript
public readonly groupingSourceKeys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsGroupingConfiguration.DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">DataAwsccApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>

---



