# `dataAwsccCloudwatchDomainAccessGrantForOrganization` Submodule <a name="`dataAwsccCloudwatchDomainAccessGrantForOrganization` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudwatchDomainAccessGrantForOrganization <a name="DataAwsccCloudwatchDomainAccessGrantForOrganization" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/cloudwatch_domain_access_grant_for_organization awscc_cloudwatch_domain_access_grant_for_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.Initializer"></a>

```typescript
import { dataAwsccCloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization(scope: Construct, id: string, config: DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig">DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig">DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudwatchDomainAccessGrantForOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isConstruct"></a>

```typescript
import { dataAwsccCloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isTerraformElement"></a>

```typescript
import { dataAwsccCloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isTerraformDataSource"></a>

```typescript
import { dataAwsccCloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.generateConfigForImport"></a>

```typescript
import { dataAwsccCloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCloudwatchDomainAccessGrantForOrganization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudwatchDomainAccessGrantForOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudwatchDomainAccessGrantForOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/cloudwatch_domain_access_grant_for_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudwatchDomainAccessGrantForOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.grantId">grantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.grantType">grantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference">DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList">DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `grantId`<sup>Required</sup> <a name="grantId" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.grantId"></a>

```typescript
public readonly grantId: string;
```

- *Type:* string

---

##### `grantType`<sup>Required</sup> <a name="grantType" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.grantType"></a>

```typescript
public readonly grantType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.principal"></a>

```typescript
public readonly principal: DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference">DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.tags"></a>

```typescript
public readonly tags: DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList">DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig <a name="DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.Initializer"></a>

```typescript
import { dataAwsccCloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchDomainAccessGrantForOrganizationConfig: dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/cloudwatch_domain_access_grant_for_organization#id DataAwsccCloudwatchDomainAccessGrantForOrganization#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal <a name="DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal.Initializer"></a>

```typescript
import { dataAwsccCloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal: dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal = { ... }
```


### DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes <a name="DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.Initializer"></a>

```typescript
import { dataAwsccCloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes: dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes = { ... }
```


### DataAwsccCloudwatchDomainAccessGrantForOrganizationTags <a name="DataAwsccCloudwatchDomainAccessGrantForOrganizationTags" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTags.Initializer"></a>

```typescript
import { dataAwsccCloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchDomainAccessGrantForOrganizationTags: dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference <a name="DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributes">principalAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList">DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal">DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalAttributes`<sup>Required</sup> <a name="principalAttributes" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributes"></a>

```typescript
public readonly principalAttributes: DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList">DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList</a>

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal">DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal</a>

---


### DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList <a name="DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer"></a>

```typescript
import { dataAwsccCloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.get"></a>

```typescript
public get(index: number): DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference <a name="DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>

---


### DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList <a name="DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.Initializer"></a>

```typescript
import { dataAwsccCloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference <a name="DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTags">DataAwsccCloudwatchDomainAccessGrantForOrganizationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudwatchDomainAccessGrantForOrganizationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTags">DataAwsccCloudwatchDomainAccessGrantForOrganizationTags</a>

---



