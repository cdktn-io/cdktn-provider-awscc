# `dataAwsccMediaconnectRouterOutput` Submodule <a name="`dataAwsccMediaconnectRouterOutput` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectRouterOutput <a name="DataAwsccMediaconnectRouterOutput" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediaconnect_router_output awscc_mediaconnect_router_output}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput(scope: Construct, id: string, config: DataAwsccMediaconnectRouterOutputConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig">DataAwsccMediaconnectRouterOutputConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig">DataAwsccMediaconnectRouterOutputConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectRouterOutput resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isConstruct"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isTerraformElement"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isTerraformDataSource"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.generateConfigForImport"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMediaconnectRouterOutput resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMediaconnectRouterOutput to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMediaconnectRouterOutput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediaconnect_router_output#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectRouterOutput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.maintenanceConfiguration">maintenanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference">DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.maintenanceType">maintenanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.maximumBitrate">maximumBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.outputType">outputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.routedState">routedState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.routerOutputId">routerOutputId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.routingScope">routingScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList">DataAwsccMediaconnectRouterOutputTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.configuration"></a>

```typescript
public readonly configuration: DataAwsccMediaconnectRouterOutputConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `maintenanceConfiguration`<sup>Required</sup> <a name="maintenanceConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.maintenanceConfiguration"></a>

```typescript
public readonly maintenanceConfiguration: DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference">DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference</a>

---

##### `maintenanceType`<sup>Required</sup> <a name="maintenanceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.maintenanceType"></a>

```typescript
public readonly maintenanceType: string;
```

- *Type:* string

---

##### `maximumBitrate`<sup>Required</sup> <a name="maximumBitrate" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.maximumBitrate"></a>

```typescript
public readonly maximumBitrate: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.outputType"></a>

```typescript
public readonly outputType: string;
```

- *Type:* string

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `routedState`<sup>Required</sup> <a name="routedState" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.routedState"></a>

```typescript
public readonly routedState: string;
```

- *Type:* string

---

##### `routerOutputId`<sup>Required</sup> <a name="routerOutputId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.routerOutputId"></a>

```typescript
public readonly routerOutputId: string;
```

- *Type:* string

---

##### `routingScope`<sup>Required</sup> <a name="routingScope" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.routingScope"></a>

```typescript
public readonly routingScope: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.tags"></a>

```typescript
public readonly tags: DataAwsccMediaconnectRouterOutputTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList">DataAwsccMediaconnectRouterOutputTagsList</a>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutput.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectRouterOutputConfig <a name="DataAwsccMediaconnectRouterOutputConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfig: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediaconnect_router_output#id DataAwsccMediaconnectRouterOutput#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectRouterOutputConfiguration <a name="DataAwsccMediaconnectRouterOutputConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfiguration: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfiguration = { ... }
```


### DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow = { ... }
```


### DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption = { ... }
```


### DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration = { ... }
```


### DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager = { ... }
```


### DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput = { ... }
```


### DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption = { ... }
```


### DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration = { ... }
```


### DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager = { ... }
```


### DataAwsccMediaconnectRouterOutputConfigurationStandard <a name="DataAwsccMediaconnectRouterOutputConfigurationStandard" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandard.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfigurationStandard: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandard = { ... }
```


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration = { ... }
```


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist = { ... }
```


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp = { ... }
```


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller = { ... }
```


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration = { ... }
```


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey = { ... }
```


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener = { ... }
```


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration = { ... }
```


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey = { ... }
```


### DataAwsccMediaconnectRouterOutputMaintenanceConfiguration <a name="DataAwsccMediaconnectRouterOutputMaintenanceConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputMaintenanceConfiguration: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfiguration = { ... }
```


### DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime <a name="DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime = { ... }
```


### DataAwsccMediaconnectRouterOutputTags <a name="DataAwsccMediaconnectRouterOutputTags" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTags.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

const dataAwsccMediaconnectRouterOutputTags: dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic">automatic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager">secretsManager</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic"></a>

```typescript
public readonly automatic: string;
```

- *Type:* string

---

##### `secretsManager`<sup>Required</sup> <a name="secretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager"></a>

```typescript
public readonly secretsManager: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyConfiguration">encryptionKeyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyType">encryptionKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionKeyConfiguration`<sup>Required</sup> <a name="encryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyConfiguration"></a>

```typescript
public readonly encryptionKeyConfiguration: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference</a>

---

##### `encryptionKeyType`<sup>Required</sup> <a name="encryptionKeyType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyType"></a>

```typescript
public readonly encryptionKeyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.destinationTransitEncryption">destinationTransitEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowArn">flowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowSourceArn">flowSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationTransitEncryption`<sup>Required</sup> <a name="destinationTransitEncryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.destinationTransitEncryption"></a>

```typescript
public readonly destinationTransitEncryption: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference</a>

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowArn"></a>

```typescript
public readonly flowArn: string;
```

- *Type:* string

---

##### `flowSourceArn`<sup>Required</sup> <a name="flowSourceArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowSourceArn"></a>

```typescript
public readonly flowSourceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic">automatic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager">secretsManager</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic"></a>

```typescript
public readonly automatic: string;
```

- *Type:* string

---

##### `secretsManager`<sup>Required</sup> <a name="secretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager"></a>

```typescript
public readonly secretsManager: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyConfiguration">encryptionKeyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyType">encryptionKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionKeyConfiguration`<sup>Required</sup> <a name="encryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyConfiguration"></a>

```typescript
public readonly encryptionKeyConfiguration: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference</a>

---

##### `encryptionKeyType`<sup>Required</sup> <a name="encryptionKeyType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyType"></a>

```typescript
public readonly encryptionKeyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.destinationTransitEncryption">destinationTransitEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLiveInputArn">mediaLiveInputArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLivePipelineId">mediaLivePipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationTransitEncryption`<sup>Required</sup> <a name="destinationTransitEncryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.destinationTransitEncryption"></a>

```typescript
public readonly destinationTransitEncryption: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference</a>

---

##### `mediaLiveInputArn`<sup>Required</sup> <a name="mediaLiveInputArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLiveInputArn"></a>

```typescript
public readonly mediaLiveInputArn: string;
```

- *Type:* string

---

##### `mediaLivePipelineId`<sup>Required</sup> <a name="mediaLivePipelineId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLivePipelineId"></a>

```typescript
public readonly mediaLivePipelineId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.mediaConnectFlow">mediaConnectFlow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.mediaLiveInput">mediaLiveInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.standard">standard</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfiguration">DataAwsccMediaconnectRouterOutputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mediaConnectFlow`<sup>Required</sup> <a name="mediaConnectFlow" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.mediaConnectFlow"></a>

```typescript
public readonly mediaConnectFlow: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference</a>

---

##### `mediaLiveInput`<sup>Required</sup> <a name="mediaLiveInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.mediaLiveInput"></a>

```typescript
public readonly mediaLiveInput: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference">DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference</a>

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.standard"></a>

```typescript
public readonly standard: DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfiguration">DataAwsccMediaconnectRouterOutputConfiguration</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.networkInterfaceArn">networkInterfaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.protocolConfiguration">protocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandard">DataAwsccMediaconnectRouterOutputConfigurationStandard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInterfaceArn`<sup>Required</sup> <a name="networkInterfaceArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.networkInterfaceArn"></a>

```typescript
public readonly networkInterfaceArn: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `protocolConfiguration`<sup>Required</sup> <a name="protocolConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.protocolConfiguration"></a>

```typescript
public readonly protocolConfiguration: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputConfigurationStandard;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandard">DataAwsccMediaconnectRouterOutputConfigurationStandard</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rist">rist</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rtp">rtp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller">srtCaller</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtListener">srtListener</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rist`<sup>Required</sup> <a name="rist" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rist"></a>

```typescript
public readonly rist: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference</a>

---

##### `rtp`<sup>Required</sup> <a name="rtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rtp"></a>

```typescript
public readonly rtp: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference</a>

---

##### `srtCaller`<sup>Required</sup> <a name="srtCaller" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller"></a>

```typescript
public readonly srtCaller: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a>

---

##### `srtListener`<sup>Required</sup> <a name="srtListener" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtListener"></a>

```typescript
public readonly srtListener: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationPort">destinationPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddress"></a>

```typescript
public readonly destinationAddress: string;
```

- *Type:* string

---

##### `destinationPort`<sup>Required</sup> <a name="destinationPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationPort"></a>

```typescript
public readonly destinationPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationPort">destinationPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrection">forwardErrorCorrection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddress"></a>

```typescript
public readonly destinationAddress: string;
```

- *Type:* string

---

##### `destinationPort`<sup>Required</sup> <a name="destinationPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationPort"></a>

```typescript
public readonly destinationPort: number;
```

- *Type:* number

---

##### `forwardErrorCorrection`<sup>Required</sup> <a name="forwardErrorCorrection" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrection"></a>

```typescript
public readonly forwardErrorCorrection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationPort">destinationPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds">minimumLatencyMilliseconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.streamId">streamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationAddress"></a>

```typescript
public readonly destinationAddress: string;
```

- *Type:* string

---

##### `destinationPort`<sup>Required</sup> <a name="destinationPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationPort"></a>

```typescript
public readonly destinationPort: number;
```

- *Type:* number

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference</a>

---

##### `minimumLatencyMilliseconds`<sup>Required</sup> <a name="minimumLatencyMilliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds"></a>

```typescript
public readonly minimumLatencyMilliseconds: number;
```

- *Type:* number

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration</a>

---


### DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference <a name="DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds">minimumLatencyMilliseconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference</a>

---

##### `minimumLatencyMilliseconds`<sup>Required</sup> <a name="minimumLatencyMilliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds"></a>

```typescript
public readonly minimumLatencyMilliseconds: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener">DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener</a>

---


### DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference <a name="DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.preferredDayTime">preferredDayTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference">DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfiguration">DataAwsccMediaconnectRouterOutputMaintenanceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `preferredDayTime`<sup>Required</sup> <a name="preferredDayTime" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.preferredDayTime"></a>

```typescript
public readonly preferredDayTime: DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference">DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputMaintenanceConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfiguration">DataAwsccMediaconnectRouterOutputMaintenanceConfiguration</a>

---


### DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference <a name="DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime">DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime">DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime</a>

---


### DataAwsccMediaconnectRouterOutputTagsList <a name="DataAwsccMediaconnectRouterOutputTagsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.get"></a>

```typescript
public get(index: number): DataAwsccMediaconnectRouterOutputTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediaconnectRouterOutputTagsOutputReference <a name="DataAwsccMediaconnectRouterOutputTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconnectRouterOutput } from '@cdktn/provider-awscc'

new dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTags">DataAwsccMediaconnectRouterOutputTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconnectRouterOutputTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterOutput.DataAwsccMediaconnectRouterOutputTags">DataAwsccMediaconnectRouterOutputTags</a>

---



