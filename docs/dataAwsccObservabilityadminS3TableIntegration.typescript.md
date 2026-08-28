# `dataAwsccObservabilityadminS3TableIntegration` Submodule <a name="`dataAwsccObservabilityadminS3TableIntegration` Submodule" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccObservabilityadminS3TableIntegration <a name="DataAwsccObservabilityadminS3TableIntegration" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/observabilityadmin_s3_table_integration awscc_observabilityadmin_s3_table_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.Initializer"></a>

```typescript
import { dataAwsccObservabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

new dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration(scope: Construct, id: string, config: DataAwsccObservabilityadminS3TableIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig">DataAwsccObservabilityadminS3TableIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig">DataAwsccObservabilityadminS3TableIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccObservabilityadminS3TableIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isConstruct"></a>

```typescript
import { dataAwsccObservabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isTerraformElement"></a>

```typescript
import { dataAwsccObservabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isTerraformDataSource"></a>

```typescript
import { dataAwsccObservabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.generateConfigForImport"></a>

```typescript
import { dataAwsccObservabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccObservabilityadminS3TableIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccObservabilityadminS3TableIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccObservabilityadminS3TableIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/observabilityadmin_s3_table_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccObservabilityadminS3TableIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference">DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.logSources">logSources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList">DataAwsccObservabilityadminS3TableIntegrationLogSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList">DataAwsccObservabilityadminS3TableIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.encryption"></a>

```typescript
public readonly encryption: DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference">DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference</a>

---

##### `logSources`<sup>Required</sup> <a name="logSources" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.logSources"></a>

```typescript
public readonly logSources: DataAwsccObservabilityadminS3TableIntegrationLogSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList">DataAwsccObservabilityadminS3TableIntegrationLogSourcesList</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.tags"></a>

```typescript
public readonly tags: DataAwsccObservabilityadminS3TableIntegrationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList">DataAwsccObservabilityadminS3TableIntegrationTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccObservabilityadminS3TableIntegrationConfig <a name="DataAwsccObservabilityadminS3TableIntegrationConfig" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.Initializer"></a>

```typescript
import { dataAwsccObservabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

const dataAwsccObservabilityadminS3TableIntegrationConfig: dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/observabilityadmin_s3_table_integration#id DataAwsccObservabilityadminS3TableIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccObservabilityadminS3TableIntegrationEncryption <a name="DataAwsccObservabilityadminS3TableIntegrationEncryption" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryption.Initializer"></a>

```typescript
import { dataAwsccObservabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

const dataAwsccObservabilityadminS3TableIntegrationEncryption: dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryption = { ... }
```


### DataAwsccObservabilityadminS3TableIntegrationLogSources <a name="DataAwsccObservabilityadminS3TableIntegrationLogSources" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSources.Initializer"></a>

```typescript
import { dataAwsccObservabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

const dataAwsccObservabilityadminS3TableIntegrationLogSources: dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSources = { ... }
```


### DataAwsccObservabilityadminS3TableIntegrationTags <a name="DataAwsccObservabilityadminS3TableIntegrationTags" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTags.Initializer"></a>

```typescript
import { dataAwsccObservabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

const dataAwsccObservabilityadminS3TableIntegrationTags: dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference <a name="DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccObservabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

new dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithm">sseAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryption">DataAwsccObservabilityadminS3TableIntegrationEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `sseAlgorithm`<sup>Required</sup> <a name="sseAlgorithm" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithm"></a>

```typescript
public readonly sseAlgorithm: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccObservabilityadminS3TableIntegrationEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryption">DataAwsccObservabilityadminS3TableIntegrationEncryption</a>

---


### DataAwsccObservabilityadminS3TableIntegrationLogSourcesList <a name="DataAwsccObservabilityadminS3TableIntegrationLogSourcesList" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.Initializer"></a>

```typescript
import { dataAwsccObservabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

new dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.get"></a>

```typescript
public get(index: number): DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference <a name="DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccObservabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

new dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSources">DataAwsccObservabilityadminS3TableIntegrationLogSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccObservabilityadminS3TableIntegrationLogSources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSources">DataAwsccObservabilityadminS3TableIntegrationLogSources</a>

---


### DataAwsccObservabilityadminS3TableIntegrationTagsList <a name="DataAwsccObservabilityadminS3TableIntegrationTagsList" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.Initializer"></a>

```typescript
import { dataAwsccObservabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

new dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference <a name="DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccObservabilityadminS3TableIntegration } from '@cdktn/provider-awscc'

new dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTags">DataAwsccObservabilityadminS3TableIntegrationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccObservabilityadminS3TableIntegrationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTags">DataAwsccObservabilityadminS3TableIntegrationTags</a>

---



