# `dataAwsccConfigConfigurationAggregator` Submodule <a name="`dataAwsccConfigConfigurationAggregator` Submodule" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConfigConfigurationAggregator <a name="DataAwsccConfigConfigurationAggregator" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/config_configuration_aggregator awscc_config_configuration_aggregator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.Initializer"></a>

```typescript
import { dataAwsccConfigConfigurationAggregator } from '@cdktn/provider-awscc'

new dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator(scope: Construct, id: string, config: DataAwsccConfigConfigurationAggregatorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig">DataAwsccConfigConfigurationAggregatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig">DataAwsccConfigConfigurationAggregatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConfigConfigurationAggregator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.isConstruct"></a>

```typescript
import { dataAwsccConfigConfigurationAggregator } from '@cdktn/provider-awscc'

dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.isTerraformElement"></a>

```typescript
import { dataAwsccConfigConfigurationAggregator } from '@cdktn/provider-awscc'

dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.isTerraformDataSource"></a>

```typescript
import { dataAwsccConfigConfigurationAggregator } from '@cdktn/provider-awscc'

dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.generateConfigForImport"></a>

```typescript
import { dataAwsccConfigConfigurationAggregator } from '@cdktn/provider-awscc'

dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccConfigConfigurationAggregator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccConfigConfigurationAggregator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccConfigConfigurationAggregator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/config_configuration_aggregator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConfigConfigurationAggregator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.accountAggregationSources">accountAggregationSources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList">DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.configurationAggregatorArn">configurationAggregatorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.configurationAggregatorName">configurationAggregatorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.organizationAggregationSource">organizationAggregationSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference">DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList">DataAwsccConfigConfigurationAggregatorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accountAggregationSources`<sup>Required</sup> <a name="accountAggregationSources" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.accountAggregationSources"></a>

```typescript
public readonly accountAggregationSources: DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList">DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList</a>

---

##### `configurationAggregatorArn`<sup>Required</sup> <a name="configurationAggregatorArn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.configurationAggregatorArn"></a>

```typescript
public readonly configurationAggregatorArn: string;
```

- *Type:* string

---

##### `configurationAggregatorName`<sup>Required</sup> <a name="configurationAggregatorName" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.configurationAggregatorName"></a>

```typescript
public readonly configurationAggregatorName: string;
```

- *Type:* string

---

##### `organizationAggregationSource`<sup>Required</sup> <a name="organizationAggregationSource" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.organizationAggregationSource"></a>

```typescript
public readonly organizationAggregationSource: DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference">DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.tags"></a>

```typescript
public readonly tags: DataAwsccConfigConfigurationAggregatorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList">DataAwsccConfigConfigurationAggregatorTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConfigConfigurationAggregatorAccountAggregationSources <a name="DataAwsccConfigConfigurationAggregatorAccountAggregationSources" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSources.Initializer"></a>

```typescript
import { dataAwsccConfigConfigurationAggregator } from '@cdktn/provider-awscc'

const dataAwsccConfigConfigurationAggregatorAccountAggregationSources: dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSources = { ... }
```


### DataAwsccConfigConfigurationAggregatorConfig <a name="DataAwsccConfigConfigurationAggregatorConfig" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig.Initializer"></a>

```typescript
import { dataAwsccConfigConfigurationAggregator } from '@cdktn/provider-awscc'

const dataAwsccConfigConfigurationAggregatorConfig: dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/config_configuration_aggregator#id DataAwsccConfigConfigurationAggregator#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConfigConfigurationAggregatorOrganizationAggregationSource <a name="DataAwsccConfigConfigurationAggregatorOrganizationAggregationSource" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSource.Initializer"></a>

```typescript
import { dataAwsccConfigConfigurationAggregator } from '@cdktn/provider-awscc'

const dataAwsccConfigConfigurationAggregatorOrganizationAggregationSource: dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSource = { ... }
```


### DataAwsccConfigConfigurationAggregatorTags <a name="DataAwsccConfigConfigurationAggregatorTags" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTags.Initializer"></a>

```typescript
import { dataAwsccConfigConfigurationAggregator } from '@cdktn/provider-awscc'

const dataAwsccConfigConfigurationAggregatorTags: dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList <a name="DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer"></a>

```typescript
import { dataAwsccConfigConfigurationAggregator } from '@cdktn/provider-awscc'

new dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.get"></a>

```typescript
public get(index: number): DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference <a name="DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccConfigConfigurationAggregator } from '@cdktn/provider-awscc'

new dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.accountIds">accountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.allAwsRegions">allAwsRegions</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSources">DataAwsccConfigConfigurationAggregatorAccountAggregationSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

---

##### `allAwsRegions`<sup>Required</sup> <a name="allAwsRegions" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.allAwsRegions"></a>

```typescript
public readonly allAwsRegions: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConfigConfigurationAggregatorAccountAggregationSources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorAccountAggregationSources">DataAwsccConfigConfigurationAggregatorAccountAggregationSources</a>

---


### DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference <a name="DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccConfigConfigurationAggregator } from '@cdktn/provider-awscc'

new dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allAwsRegions">allAwsRegions</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSource">DataAwsccConfigConfigurationAggregatorOrganizationAggregationSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allAwsRegions`<sup>Required</sup> <a name="allAwsRegions" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allAwsRegions"></a>

```typescript
public readonly allAwsRegions: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConfigConfigurationAggregatorOrganizationAggregationSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorOrganizationAggregationSource">DataAwsccConfigConfigurationAggregatorOrganizationAggregationSource</a>

---


### DataAwsccConfigConfigurationAggregatorTagsList <a name="DataAwsccConfigConfigurationAggregatorTagsList" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.Initializer"></a>

```typescript
import { dataAwsccConfigConfigurationAggregator } from '@cdktn/provider-awscc'

new dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.get"></a>

```typescript
public get(index: number): DataAwsccConfigConfigurationAggregatorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConfigConfigurationAggregatorTagsOutputReference <a name="DataAwsccConfigConfigurationAggregatorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccConfigConfigurationAggregator } from '@cdktn/provider-awscc'

new dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTags">DataAwsccConfigConfigurationAggregatorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConfigConfigurationAggregatorTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationAggregator.DataAwsccConfigConfigurationAggregatorTags">DataAwsccConfigConfigurationAggregatorTags</a>

---



