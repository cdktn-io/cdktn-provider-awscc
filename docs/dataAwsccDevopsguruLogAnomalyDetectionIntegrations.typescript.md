# `dataAwsccDevopsguruLogAnomalyDetectionIntegrations` Submodule <a name="`dataAwsccDevopsguruLogAnomalyDetectionIntegrations` Submodule" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDevopsguruLogAnomalyDetectionIntegrations <a name="DataAwsccDevopsguruLogAnomalyDetectionIntegrations" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/devopsguru_log_anomaly_detection_integrations awscc_devopsguru_log_anomaly_detection_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.Initializer"></a>

```typescript
import { dataAwsccDevopsguruLogAnomalyDetectionIntegrations } from '@cdktn/provider-awscc'

new dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations(scope: Construct, id: string, config?: DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig">DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig">DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDevopsguruLogAnomalyDetectionIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.isConstruct"></a>

```typescript
import { dataAwsccDevopsguruLogAnomalyDetectionIntegrations } from '@cdktn/provider-awscc'

dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.isTerraformElement"></a>

```typescript
import { dataAwsccDevopsguruLogAnomalyDetectionIntegrations } from '@cdktn/provider-awscc'

dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.isTerraformDataSource"></a>

```typescript
import { dataAwsccDevopsguruLogAnomalyDetectionIntegrations } from '@cdktn/provider-awscc'

dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.generateConfigForImport"></a>

```typescript
import { dataAwsccDevopsguruLogAnomalyDetectionIntegrations } from '@cdktn/provider-awscc'

dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDevopsguruLogAnomalyDetectionIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDevopsguruLogAnomalyDetectionIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDevopsguruLogAnomalyDetectionIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/devopsguru_log_anomaly_detection_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDevopsguruLogAnomalyDetectionIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig <a name="DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig.Initializer"></a>

```typescript
import { dataAwsccDevopsguruLogAnomalyDetectionIntegrations } from '@cdktn/provider-awscc'

const dataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig: dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDevopsguruLogAnomalyDetectionIntegrations.DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---



