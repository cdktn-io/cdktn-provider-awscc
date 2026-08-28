# `dataAwsccAppsyncDataSource` Submodule <a name="`dataAwsccAppsyncDataSource` Submodule" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppsyncDataSource <a name="DataAwsccAppsyncDataSource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appsync_data_source awscc_appsync_data_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

new dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource(scope: Construct, id: string, config: DataAwsccAppsyncDataSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig">DataAwsccAppsyncDataSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig">DataAwsccAppsyncDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppsyncDataSource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isConstruct"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformElement"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformDataSource"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generateConfigForImport"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAppsyncDataSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAppsyncDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAppsyncDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appsync_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppsyncDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.dataSourceArn">dataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.dynamoDbConfig">dynamoDbConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference">DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.elasticsearchConfig">elasticsearchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference">DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.eventBridgeConfig">eventBridgeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference">DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.httpConfig">httpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference">DataAwsccAppsyncDataSourceHttpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference">DataAwsccAppsyncDataSourceLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.metricsConfig">metricsConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.openSearchServiceConfig">openSearchServiceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference">DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.relationalDatabaseConfig">relationalDatabaseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference">DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.dataSourceArn"></a>

```typescript
public readonly dataSourceArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dynamoDbConfig`<sup>Required</sup> <a name="dynamoDbConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.dynamoDbConfig"></a>

```typescript
public readonly dynamoDbConfig: DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference">DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference</a>

---

##### `elasticsearchConfig`<sup>Required</sup> <a name="elasticsearchConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.elasticsearchConfig"></a>

```typescript
public readonly elasticsearchConfig: DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference">DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference</a>

---

##### `eventBridgeConfig`<sup>Required</sup> <a name="eventBridgeConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.eventBridgeConfig"></a>

```typescript
public readonly eventBridgeConfig: DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference">DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference</a>

---

##### `httpConfig`<sup>Required</sup> <a name="httpConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.httpConfig"></a>

```typescript
public readonly httpConfig: DataAwsccAppsyncDataSourceHttpConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference">DataAwsccAppsyncDataSourceHttpConfigOutputReference</a>

---

##### `lambdaConfig`<sup>Required</sup> <a name="lambdaConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.lambdaConfig"></a>

```typescript
public readonly lambdaConfig: DataAwsccAppsyncDataSourceLambdaConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference">DataAwsccAppsyncDataSourceLambdaConfigOutputReference</a>

---

##### `metricsConfig`<sup>Required</sup> <a name="metricsConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.metricsConfig"></a>

```typescript
public readonly metricsConfig: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `openSearchServiceConfig`<sup>Required</sup> <a name="openSearchServiceConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.openSearchServiceConfig"></a>

```typescript
public readonly openSearchServiceConfig: DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference">DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference</a>

---

##### `relationalDatabaseConfig`<sup>Required</sup> <a name="relationalDatabaseConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.relationalDatabaseConfig"></a>

```typescript
public readonly relationalDatabaseConfig: DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference">DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference</a>

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppsyncDataSourceConfig <a name="DataAwsccAppsyncDataSourceConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

const dataAwsccAppsyncDataSourceConfig: dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appsync_data_source#id DataAwsccAppsyncDataSource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppsyncDataSourceDynamoDbConfig <a name="DataAwsccAppsyncDataSourceDynamoDbConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

const dataAwsccAppsyncDataSourceDynamoDbConfig: dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfig = { ... }
```


### DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig <a name="DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

const dataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig: dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig = { ... }
```


### DataAwsccAppsyncDataSourceElasticsearchConfig <a name="DataAwsccAppsyncDataSourceElasticsearchConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

const dataAwsccAppsyncDataSourceElasticsearchConfig: dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfig = { ... }
```


### DataAwsccAppsyncDataSourceEventBridgeConfig <a name="DataAwsccAppsyncDataSourceEventBridgeConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

const dataAwsccAppsyncDataSourceEventBridgeConfig: dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfig = { ... }
```


### DataAwsccAppsyncDataSourceHttpConfig <a name="DataAwsccAppsyncDataSourceHttpConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

const dataAwsccAppsyncDataSourceHttpConfig: dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfig = { ... }
```


### DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig <a name="DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

const dataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig: dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig = { ... }
```


### DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig <a name="DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

const dataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig: dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig = { ... }
```


### DataAwsccAppsyncDataSourceLambdaConfig <a name="DataAwsccAppsyncDataSourceLambdaConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

const dataAwsccAppsyncDataSourceLambdaConfig: dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfig = { ... }
```


### DataAwsccAppsyncDataSourceOpenSearchServiceConfig <a name="DataAwsccAppsyncDataSourceOpenSearchServiceConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

const dataAwsccAppsyncDataSourceOpenSearchServiceConfig: dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfig = { ... }
```


### DataAwsccAppsyncDataSourceRelationalDatabaseConfig <a name="DataAwsccAppsyncDataSourceRelationalDatabaseConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

const dataAwsccAppsyncDataSourceRelationalDatabaseConfig: dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfig = { ... }
```


### DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig <a name="DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

const dataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig: dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference <a name="DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

new dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtl">baseTableTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName">deltaSyncTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl">deltaSyncTableTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig">DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseTableTtl`<sup>Required</sup> <a name="baseTableTtl" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtl"></a>

```typescript
public readonly baseTableTtl: string;
```

- *Type:* string

---

##### `deltaSyncTableName`<sup>Required</sup> <a name="deltaSyncTableName" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName"></a>

```typescript
public readonly deltaSyncTableName: string;
```

- *Type:* string

---

##### `deltaSyncTableTtl`<sup>Required</sup> <a name="deltaSyncTableTtl" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl"></a>

```typescript
public readonly deltaSyncTableTtl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig">DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a>

---


### DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference <a name="DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

new dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfig">deltaSyncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference">DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentials">useCallerCredentials</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.versioned">versioned</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfig">DataAwsccAppsyncDataSourceDynamoDbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `deltaSyncConfig`<sup>Required</sup> <a name="deltaSyncConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfig"></a>

```typescript
public readonly deltaSyncConfig: DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference">DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference</a>

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `useCallerCredentials`<sup>Required</sup> <a name="useCallerCredentials" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentials"></a>

```typescript
public readonly useCallerCredentials: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `versioned`<sup>Required</sup> <a name="versioned" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.versioned"></a>

```typescript
public readonly versioned: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncDataSourceDynamoDbConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfig">DataAwsccAppsyncDataSourceDynamoDbConfig</a>

---


### DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference <a name="DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

new dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfig">DataAwsccAppsyncDataSourceElasticsearchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncDataSourceElasticsearchConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfig">DataAwsccAppsyncDataSourceElasticsearchConfig</a>

---


### DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference <a name="DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

new dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArn">eventBusArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfig">DataAwsccAppsyncDataSourceEventBridgeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArn"></a>

```typescript
public readonly eventBusArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncDataSourceEventBridgeConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfig">DataAwsccAppsyncDataSourceEventBridgeConfig</a>

---


### DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference <a name="DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

new dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion">signingRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName">signingServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `signingRegion`<sup>Required</sup> <a name="signingRegion" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion"></a>

```typescript
public readonly signingRegion: string;
```

- *Type:* string

---

##### `signingServiceName`<sup>Required</sup> <a name="signingServiceName" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName"></a>

```typescript
public readonly signingServiceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---


### DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference <a name="DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

new dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType">authorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig">awsIamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType"></a>

```typescript
public readonly authorizationType: string;
```

- *Type:* string

---

##### `awsIamConfig`<sup>Required</sup> <a name="awsIamConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig"></a>

```typescript
public readonly awsIamConfig: DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig</a>

---


### DataAwsccAppsyncDataSourceHttpConfigOutputReference <a name="DataAwsccAppsyncDataSourceHttpConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

new dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfig">DataAwsccAppsyncDataSourceHttpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncDataSourceHttpConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfig">DataAwsccAppsyncDataSourceHttpConfig</a>

---


### DataAwsccAppsyncDataSourceLambdaConfigOutputReference <a name="DataAwsccAppsyncDataSourceLambdaConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

new dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfig">DataAwsccAppsyncDataSourceLambdaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="lambdaFunctionArn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArn"></a>

```typescript
public readonly lambdaFunctionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncDataSourceLambdaConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfig">DataAwsccAppsyncDataSourceLambdaConfig</a>

---


### DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference <a name="DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

new dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfig">DataAwsccAppsyncDataSourceOpenSearchServiceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncDataSourceOpenSearchServiceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfig">DataAwsccAppsyncDataSourceOpenSearchServiceConfig</a>

---


### DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference <a name="DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

new dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfig">rdsHttpEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference">DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceType">relationalDatabaseSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfig">DataAwsccAppsyncDataSourceRelationalDatabaseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rdsHttpEndpointConfig`<sup>Required</sup> <a name="rdsHttpEndpointConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfig"></a>

```typescript
public readonly rdsHttpEndpointConfig: DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference">DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference</a>

---

##### `relationalDatabaseSourceType`<sup>Required</sup> <a name="relationalDatabaseSourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceType"></a>

```typescript
public readonly relationalDatabaseSourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncDataSourceRelationalDatabaseConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfig">DataAwsccAppsyncDataSourceRelationalDatabaseConfig</a>

---


### DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference <a name="DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncDataSource } from '@cdktn/provider-awscc'

new dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArn">awsSecretStoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `awsSecretStoreArn`<sup>Required</sup> <a name="awsSecretStoreArn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArn"></a>

```typescript
public readonly awsSecretStoreArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifier"></a>

```typescript
public readonly dbClusterIdentifier: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a>

---



